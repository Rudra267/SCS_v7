import { JSDOM } from "jsdom";

export type AchievementCategory = "Academics" | "Co-Curricular" | "Sports";

export type Achievement = {
  id: string;
  category: AchievementCategory;
  title: string;
  description: string;
  image: string;
};

type ParsedAchievement = Omit<Achievement, "id" | "category">;

const BASE_URL = "https://srichaitanyaschool.net/our-achievements";
const UPLOAD_HOST = "srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads";
const DEFAULT_MAX_PAGES = 2;
const DEFAULT_TIMEOUT_MS = 2500;
const ABORT_ERROR_NAME = "AbortError";

type GetAchievementsOptions = {
  limit?: number;
  pagesPerCategory?: number;
  timeoutMs?: number;
};

const CATEGORY_CONFIG = [
  {
    key: "academics",
    label: "Academics" as const,
    listIndex: 0,
    perPage: 10,
    
    url: (page: number) =>
      `${BASE_URL}?category=104&page=${page}&pagination=0&per-page=10`,
  },
  {
    key: "co-curricular",
    label: "Co-Curricular" as const,
    listIndex: 1,
    perPage: 10,
    url: (page: number) =>
      `${BASE_URL}?category=105&dp-1-page=${page}&dp-1-per-page=10&pagination=0`,
  },
  {
    key: "sports",
    label: "Sports" as const,
    listIndex: 2,
    perPage: 10,
    url: (page: number) =>
      `${BASE_URL}?category=106&dp-2-page=${page}&dp-2-per-page=10&pagination=0`,
  },
];

const cleanText = (value?: string | null) =>
  value ? value.replace(/\s+/g, " ").trim() : "";

const getImageSource = (img: HTMLImageElement) => {
  const raw =
    img.getAttribute("src") ||
    img.getAttribute("data-src") ||
    img.getAttribute("data-lazy") ||
    img.getAttribute("data-original") ||
    "";
  if (!raw) return "";
  if (raw.startsWith("//")) return `https:${raw}`;
  if (raw.startsWith("/")) return `https://srichaitanyaschool.net${raw}`;
  return raw;
};

const findCardContainer = (img: HTMLImageElement) => {
  let current: HTMLElement | null = img.parentElement;
  while (current) {
    const heading = current.querySelector("h1, h2, h3, h4, h5");
    if (heading) {
      const imageCount = current.querySelectorAll(
        `img[src*="${UPLOAD_HOST}"], img[data-src*="${UPLOAD_HOST}"], img[data-lazy*="${UPLOAD_HOST}"]`,
      ).length;
      if (imageCount <= 1) {
        return current;
      }
    }
    current = current.parentElement;
  }
  return img.parentElement;
};

const extractCards = (html: string): ParsedAchievement[] => {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const images = Array.from(document.querySelectorAll("img"))
    .map((img) => ({ img, src: getImageSource(img as HTMLImageElement) }))
    .filter((item) => item.src.includes(UPLOAD_HOST));

  const cards: ParsedAchievement[] = [];

  for (const { img, src } of images) {
    const container = findCardContainer(img as HTMLImageElement);
    const heading = container?.querySelector("h1, h2, h3, h4, h5");
    const title = cleanText(heading?.textContent);
    if (!title) continue;

    const paragraph = container?.querySelector("p");
    let description = cleanText(paragraph?.textContent);
    if (description === ".") {
      description = "";
    }

    cards.push({ title, description, image: src });
  }

  return cards;
};

const sliceCategoryItems = (
  cards: ParsedAchievement[],
  listIndex: number,
  perPage: number,
) => {
  const listCount = 3;
  const expected = perPage * listCount;
  const trimmed = cards.slice(0, expected);
  const start = listIndex * perPage;
  return trimmed.slice(start, start + perPage);
};

const fetchWithTimeout = async (url: string, timeoutMs: number) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      next: { revalidate: 3600 },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
};

const isAbortError = (error: unknown) =>
  error instanceof Error && error.name === ABORT_ERROR_NAME;

const fetchCategory = async (
  config: (typeof CATEGORY_CONFIG)[number],
  options: Required<Omit<GetAchievementsOptions, "limit">>,
) => {
  const results: Achievement[] = [];
  const seen = new Set<string>();

  for (let page = 1; page <= options.pagesPerCategory; page += 1) {
    let response: Response;

    try {
      response = await fetchWithTimeout(config.url(page), options.timeoutMs);
    } catch (error) {
      if (isAbortError(error)) {
        break;
      }
      throw error;
    }

    if (!response.ok) {
      break;
    }

    const html = await response.text();
    const cards = extractCards(html);
    const pageItems = sliceCategoryItems(cards, config.listIndex, config.perPage);

    if (pageItems.length === 0) {
      break;
    }

    pageItems.forEach((item, index) => {
      const dedupeKey = `${item.title}|${item.image}`;
      if (seen.has(dedupeKey)) return;
      seen.add(dedupeKey);

      results.push({
        id: `${config.key}-${page}-${index}`,
        category: config.label,
        ...item,
      });
    });

    if (pageItems.length < config.perPage) {
      break;
    }
  }

  return results;
};

export const getAchievements = async (
  options: GetAchievementsOptions = {},
): Promise<Achievement[]> => {
  const pagesPerCategory = options.pagesPerCategory ?? DEFAULT_MAX_PAGES;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  try {
    const grouped = await Promise.all(
      CATEGORY_CONFIG.map((config) =>
        fetchCategory(config, { pagesPerCategory, timeoutMs }),
      ),
    );
    const achievements = grouped.flat();
    return typeof options.limit === "number"
      ? achievements.slice(0, options.limit)
      : achievements;
  } catch (error) {
    if (!isAbortError(error)) {
      console.error("Failed to load achievements:", error);
    }
    return [];
  }
};
