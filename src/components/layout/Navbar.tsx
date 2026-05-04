"use client";

import { useEffect, useState, type FocusEvent, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const logo = "/assets/logo_transparent_fixed.png";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Founder", href: "/about-us/founder" },
      { label: "Chairperson", href: "/about-us/chairperson" },
      { label: "Leadership Team", href: "/about-us/leadership-team" },
    ],
  },
  {
    label: "Academics",
    href: "/academics/pre-primary",
    children: [
      { label: "Pre-Primary", href: "/academics/pre-primary" },
      { label: "Primary", href: "/academics/primary" },
      { label: "High School", href: "/academics/high-school" },
    ],
  },
  {
    label: "Student Life",
    href: "/student-life",
    children: [
      { label: "Facilities", href: "/student-life/facilities" },
      { label: "Uniforms", href: "/student-life/uniforms" },
      { label: "Gallery", href: "/student-life/gallery" },
    ],
  },
  { label: "Achievements", href: "/achievements" },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Current Openings", href: "/careers/current-openings" },
      { label: "Apply Jobs", href: "/careers/apply" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [{ label: "Enquire", href: "/contact/enquire" }],
  },
];

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);
const condensedPrimaryLinks = navLinks.slice(0, 2);
const condensedMoreLinks = navLinks.slice(2);

const Logo = ({
  compact = false,
  medium = false,
  hideText = false,
  isScrolled = false,
  showCompactText = false,
}: {
  compact?: boolean;
  medium?: boolean;
  hideText?: boolean;
  isScrolled?: boolean;
  showCompactText?: boolean;
}) => {
  const shouldHideText = hideText || (compact && !showCompactText);
  return (
    <Link
      href="/"
      className={`group relative z-0 flex flex-col items-center justify-center transition-transform duration-300 ${
        compact ? "translate-y-0 pt-[22px]" : "translate-y-3"
      }`}
    >
      <div
        className={`relative z-10 flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#ffffff_0%,#edf3ff_100%)] shadow-[0_10px_18px_rgba(255,255,255,0.55)_inset,0_-8px_16px_rgba(29,78,147,0.12)_inset,0_18px_30px_rgba(13,59,102,0.24),0_4px_10px_rgba(13,59,102,0.16)] transition-transform duration-300 ${
          compact ? "h-[64px] w-[64px]" : medium ? "h-[60px] w-[60px]" : "h-[68px] w-[68px]"
        } ${isScrolled ? (compact ? "scale-105" : "scale-[1.2]") : "scale-100"}`}
      >
        <span className="pointer-events-none absolute left-1/2 top-[10%] h-[28%] w-[62%] -translate-x-1/2 rounded-full bg-white/75 blur-[3px]" />
        <img
          src={logo}
          alt="Sri Chaitanya logo"
          className={`relative z-10 ${compact ? "h-[74px] w-[74px]" : medium ? "h-[64px] w-[64px]" : "h-[72px] w-[72px]"} object-contain drop-shadow-[0_3px_4px_rgba(13,59,102,0.2)]`}
        />
      </div>
      <div
        className={`pointer-events-none absolute left-1/2 z-0 ${
          compact ? "top-[54px] h-24 w-36" : medium ? "top-[32px] h-24 w-[300px]" : "top-[35px] h-24 w-[420px]"
        } -translate-x-1/2 rounded-b-[55%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.12)_45%,rgba(255,255,255,0)_75%)] blur-2xl mix-blend-screen transition-opacity duration-300 ${
          shouldHideText ? "opacity-0" : "opacity-60"
        }`}
      />
      <div
        className={`pointer-events-none absolute left-1/2 z-0 ${
          compact ? "top-[58px] h-10 w-10" : medium ? "top-[62px] h-11 w-11" : "top-[68px] h-12 w-12"
        } -translate-x-1/2 rounded-full bg-white/20 blur-lg transition-opacity duration-300 ${
          shouldHideText ? "opacity-0" : "opacity-55"
        }`}
      />
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-300 ${
          shouldHideText
            ? "opacity-0 translate-y-2 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <span
          className={`mt-2 font-['Cinzel_Decorative'] font-bold text-[#2B4A64] drop-shadow-[0_4px_14px_rgba(10,24,48,0.18)] ${
            compact ? "text-[1.55rem]" : medium ? "text-[1.65rem]" : "text-3xl"
          }`}
        >
          Sri Chaitanya
        </span>
        <span
          className={`font-sans font-semibold tracking-[0.45em] text-[#6A9FD0] drop-shadow-[0_3px_10px_rgba(10,24,48,0.24)] ${
            compact ? "text-[11px]" : medium ? "text-[11px]" : "text-sm"
          }`}
        >
          SCHOOLS
        </span>
      </div>
    </Link>
  );
};

const InlineBrand = ({ location }: { location: string }) => {
  return (
    <Link href="/" className="flex items-center gap-3 text-white">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/35 bg-[linear-gradient(180deg,#ffffff_0%,#edf3ff_100%)] shadow-[0_8px_18px_rgba(255,255,255,0.35)_inset,0_-6px_12px_rgba(29,78,147,0.1)_inset,0_10px_22px_rgba(13,59,102,0.28)]">
        <img
          src={logo}
          alt="Sri Chaitanya logo"
          className="h-[58px] w-[58px] object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-['Cinzel_Decorative'] text-[1.45rem] font-bold leading-none tracking-[0.04em] text-white">
          Sri Chaitanya
        </span>
        <div className="mt-1 flex items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/72">
            Schools
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/88">
            <span className="h-2 w-2 rounded-full bg-[#57D66B] shadow-[0_0_10px_rgba(87,214,107,0.8)]" />
            {location === "Select City" ? "Active" : location}
          </span>
        </div>
      </div>
    </Link>
  );
};

const ApplyAdmissionButton = ({
  compact = false,
}: {
  compact?: boolean;
}) => {
  return (
    <Link
      href="/admissions"
      className="group relative inline-flex items-center overflow-hidden rounded-full bg-[linear-gradient(90deg,#D9F3E7_0%,#8DD2C3_34%,#6A9FD0_68%,#2B4A64_100%)] p-[1.5px] shadow-[0_12px_26px_rgba(43,74,100,0.24),0_0_0_1px_rgba(255,255,255,0.14)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_18px_36px_rgba(43,74,100,0.3),0_0_22px_rgba(141,210,195,0.24)] active:translate-y-0 active:scale-[0.985]"
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full opacity-100">
        <span className="absolute inset-y-[-24%] -left-20 w-16 rotate-[24deg] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_28%,rgba(255,255,255,1)_52%,rgba(255,255,255,0.72)_76%,rgba(255,255,255,0)_100%)] blur-[3px] shadow-[0_0_16px_rgba(255,255,255,0.95)] animate-[borderGlint_3.2s_linear_infinite]" />
      </span>
      <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.03)_34%,rgba(255,255,255,0)_74%)] opacity-90" />
      <span
        className={`relative inline-flex items-center overflow-hidden rounded-full bg-[linear-gradient(90deg,#6A9FD0_0%,#4F7BA2_55%,#2B4A64_100%)] font-bold uppercase text-[#FFFFFF] shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.06),0_8px_18px_rgba(43,74,100,0.22)] transition-colors duration-300 group-hover:bg-[linear-gradient(90deg,#78AEDB_0%,#5886AE_55%,#233E54_100%)] ${
          compact ? "px-4 py-2 text-[10px] tracking-[0.16em]" : "px-5 py-2 text-[10px] tracking-[0.26em]"
        }`}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_54%)]" />
        <span className="pointer-events-none absolute inset-y-[2px] left-[7%] w-[42%] rounded-full bg-white/10 blur-md opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
        <span className="pointer-events-none absolute -bottom-3 right-4 h-6 w-10 rounded-full bg-[#D9F3E7]/25 blur-lg" />
        <span className="relative z-10">Apply for Admission</span>
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [location, setLocation] = useState("Select City");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginView, setLoginView] = useState<"login" | "reset">("login");
  const [loginRole, setLoginRole] = useState<"parent" | "teacher">("parent");
  const [loginIdentifier, setLoginIdentifier] = useState("SCS");
  const pathname = usePathname();

  const normalizeParentIdentifier = (value: string) => {
    if (!value) {
      return "SCS";
    }

    if ("SCS".startsWith(value.toUpperCase())) {
      return "SCS";
    }

    const suffix = value.toUpperCase().startsWith("SCS")
      ? value.slice(3)
      : value.replace(/^(SCS|SC|S)/i, "");

    return `SCS${suffix}`;
  };

  const handleLoginRoleChange = (value: string) => {
    const nextRole = value as "parent" | "teacher";
    setLoginRole(nextRole);
    setLoginIdentifier(nextRole === "parent" ? "SCS" : "");
  };

  const handleSelectCityClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("location-selector");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.location.assign("/#location-selector");
    }
  };

  const handleLoginClick = () => {
    setLoginView("login");
    setIsLoginOpen(true);
    setIsOpen(false);
  };

  const handleForgotClick = () => {
    setLoginView("reset");
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const updateLocation = () => {
      const loc = localStorage.getItem("scs-location");
      if (loc) {
        setLocation(loc);
      }
    };

    updateLocation();
    window.addEventListener("locationChange", updateLocation);

    return () => window.removeEventListener("locationChange", updateLocation);
  }, []);

  const renderDesktopLink = (link: NavLink, align: "left" | "right" = "left") => {
    if (!link.children?.length) {
      return (
        <Link
          key={link.label}
          href={link.href}
          className="desktop-nav-link text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] hover:text-[#E3F2FD] transition-colors duration-200"
        >
          {link.label}
        </Link>
      );
    }

    const isOpen = openDropdown === link.label;

    return (
      <div
        key={link.label}
        className="relative"
        onMouseEnter={() => setOpenDropdown(link.label)}
        onMouseLeave={() => setOpenDropdown(null)}
        onFocus={() => setOpenDropdown(link.label)}
        onBlur={(event: FocusEvent<HTMLDivElement>) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setOpenDropdown(null);
          }
        }}
      >
        <Link
          href={link.href}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => setOpenDropdown(null)}
          className="desktop-nav-link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] hover:text-[#E3F2FD] transition-colors duration-200"
        >
          {link.label}
          <ChevronDown className="w-3 h-3 opacity-80" />
        </Link>
        <div
          className={`absolute ${align === "right" ? "right-0" : "left-0"} top-full z-50 pt-3 origin-top transition-[opacity,transform] duration-200 ease-out ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-2 scale-95 pointer-events-none"
          }`}
        >
          <div
            role="menu"
            className="min-w-[200px] rounded-xl bg-white text-[hsl(var(--primary))] shadow-[0_18px_40px_rgba(0,0,0,0.25)] border border-black/10 overflow-hidden"
          >
            <div className="py-2">
              {link.children.map((child) => (
                <Link
                  key={child.label}
                  role="menuitem"
                  href={child.href}
                  onClick={() => setOpenDropdown(null)}
                  className="block px-5 py-2.5 text-sm font-medium text-[hsl(var(--primary))] hover:bg-black/5 transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCondensedLink = (link: NavLink) => {
    const isOpen = openDropdown === link.label;

    return (
      <div
        key={link.label}
        className="relative"
        onMouseEnter={() => setOpenDropdown(link.label)}
        onMouseLeave={() => setOpenDropdown(null)}
        onFocus={() => setOpenDropdown(link.label)}
        onBlur={(event: FocusEvent<HTMLDivElement>) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setOpenDropdown(null);
          }
        }}
      >
        <Link
          href={link.href}
          aria-haspopup={link.children?.length ? "menu" : undefined}
          aria-expanded={link.children?.length ? isOpen : undefined}
          onClick={() => setOpenDropdown(link.children?.length ? link.label : null)}
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:text-[#E3F2FD]"
        >
          {link.label}
          {link.children?.length ? <ChevronDown className="h-3 w-3 opacity-80" /> : null}
        </Link>
        {link.children?.length ? (
          <div
            className={`absolute left-0 top-full z-50 pt-3 transition-[opacity,transform] duration-200 ease-out ${
              isOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none translate-y-2 scale-95 opacity-0"
            }`}
          >
            <div
              role="menu"
              className="min-w-[200px] overflow-hidden rounded-xl border border-black/10 bg-white text-[hsl(var(--primary))] shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="py-2">
                {link.children.map((child) => (
                  <Link
                    key={child.label}
                    role="menuitem"
                    href={child.href}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-5 py-2.5 text-sm font-medium text-[hsl(var(--primary))] transition-colors hover:bg-black/5"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[linear-gradient(90deg,#2B4A64_0%,#365E7D_46%,#4F7BA2_100%)] text-white shadow-[0_18px_35px_rgba(32,55,76,0.28)]">
      <div className="h-1 w-full bg-[linear-gradient(90deg,_hsl(var(--accent)),_hsl(var(--primary)))]" />
      <div className="container mx-auto relative h-[72px] px-4 sm:h-[80px] sm:px-6 min-[900px]:h-[80px] min-[1540px]:h-[80px]">
        <div className="hidden min-[1540px]:grid grid-cols-[1fr_auto_1fr] items-center py-3">
          <div className="flex items-center justify-end gap-6 pr-6 -translate-y-6 min-[1536px]:gap-5 min-[1536px]:pr-4 min-[1536px]:[&>a]:scale-[0.94] min-[1536px]:[&_.desktop-nav-link]:text-[11px] min-[1536px]:[&_.desktop-nav-link]:tracking-[0.16em]">
            {leftLinks.map((link) => renderDesktopLink(link))}
          </div>

          <div className="min-[1536px]:scale-[0.9] min-[1536px]:origin-top">
            <Logo hideText={isScrolled} isScrolled={isScrolled} />
          </div>

          <div className="flex items-center justify-start gap-6 pl-6 -translate-y-6 min-[1536px]:gap-5 min-[1536px]:pl-4 min-[1536px]:[&_.desktop-nav-link]:text-[11px] min-[1536px]:[&_.desktop-nav-link]:tracking-[0.16em]">
            {rightLinks.map((link) => renderDesktopLink(link, "right"))}
          </div>
        </div>

        <div className="relative z-10 hidden h-full items-start pt-3 min-[900px]:flex min-[1540px]:hidden">
          <div className="flex items-start gap-2">
            <button className="flex h-10 w-10 items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <a
              href="/#location-selector"
              onClick={handleSelectCityClick}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_100%)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_18px_rgba(13,59,102,0.18)] backdrop-blur-md sm:px-4 sm:tracking-[0.16em]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/12 text-white">
                <MapPin className="h-3 w-3" />
              </span>
              <span className="max-w-[110px] truncate">
                {location === "Select City" ? "Location" : location}
              </span>
            </a>
          </div>
          <div className="absolute left-1/2 top-2 z-10 -translate-x-1/2">
            <Logo compact showCompactText={!isScrolled} isScrolled={isScrolled} />
          </div>
          <div className="ml-auto flex items-start gap-2">
            <ApplyAdmissionButton compact />
            <button
              type="button"
              onClick={handleLoginClick}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_22px_rgba(13,59,102,0.16)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/16"
              aria-label="Open login"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/12 text-white">
                <User className="h-3.5 w-3.5" />
              </span>
              Login
            </button>
          </div>
        </div>

        <div className="relative z-10 flex h-full items-start pt-3 min-[900px]:hidden">
          <div className="flex items-start gap-2">
            <button className="flex h-10 w-10 items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <a
              href="/#location-selector"
              onClick={handleSelectCityClick}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_100%)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_18px_rgba(13,59,102,0.18)] backdrop-blur-md sm:px-4 sm:tracking-[0.16em]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/12 text-white">
                <MapPin className="h-3 w-3" />
              </span>
              <span className="max-w-[92px] truncate sm:max-w-[120px]">
                {location === "Select City" ? "Location" : location}
              </span>
            </a>
          </div>
          <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2 min-[650px]:top-1 min-[900px]:top-3">
            <Logo compact showCompactText={!isScrolled} isScrolled={isScrolled} />
          </div>
        </div>

        <div className="hidden">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_10px_24px_rgba(8,34,68,0.2)] backdrop-blur-md transition hover:bg-white/16"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2">
            <Logo compact showCompactText={!isScrolled} isScrolled={isScrolled} />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <ApplyAdmissionButton compact />
            <button
              type="button"
              onClick={handleLoginClick}
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_28px_rgba(13,59,102,0.25)] backdrop-blur-md transition-all duration-300 ease-out hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--accent))] hover:text-white hover:shadow-[0_18px_35px_rgba(226,61,104,0.35)] active:scale-[0.98]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white shadow-[0_6px_12px_rgba(226,61,104,0.35)] transition group-hover:bg-white/25 group-hover:text-white">
                <User className="w-3.5 h-3.5" />
              </span>
              Login
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white text-[hsl(var(--primary))] min-[900px]:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 border-l border-[hsl(var(--primary)/0.15)] pl-4 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary)/0.8)] hover:text-[hsl(var(--accent))] py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/admissions"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#6A9FD0_0%,#4F7BA2_55%,#2B4A64_100%)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_12px_28px_rgba(13,59,102,0.25)] transition-all hover:brightness-105"
                onClick={() => setIsOpen(false)}
              >
                Apply for Admission
              </Link>
              <button
                type="button"
                onClick={handleLoginClick}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[hsl(var(--primary))] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_12px_28px_rgba(13,59,102,0.25)] transition-colors hover:bg-[hsl(var(--accent))]"
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 hidden bg-[radial-gradient(circle_at_top,rgba(141,210,195,0.24),rgba(43,74,100,0.56)_44%,rgba(28,52,77,0.74)_100%)] backdrop-blur-sm min-[900px]:block min-[1540px]:hidden"
              aria-label="Close navigation menu"
            />
            <motion.div
              initial={{ opacity: 0, x: 72 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 72 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 hidden w-[min(430px,100vw)] overflow-hidden text-white min-[900px]:block min-[1540px]:hidden"
            >
              <div className="absolute inset-0 border-l border-white/18 bg-[linear-gradient(180deg,rgba(43,74,100,0.98)_0%,rgba(54,94,125,0.98)_48%,rgba(79,123,162,0.96)_100%)] shadow-[-20px_0_60px_rgba(19,37,58,0.22)]" />
              <div className="absolute inset-0 opacity-40">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "46px 46px",
                  }}
                />
              </div>
              <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(217,243,231,0.18),transparent_68%)] blur-3xl" />
              <div className="absolute -right-16 bottom-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(141,210,195,0.22),transparent_68%)] blur-3xl" />

              <div className="relative flex h-full flex-col px-6 pb-8 pt-12">
                <div className="flex items-start justify-between gap-4">
                  {/* <div className="max-w-[220px]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/58">
                      Navigation
                    </p>
                    <h2 className="mt-3 font-['Fraunces'] text-[2.3rem] font-semibold leading-[0.94] text-white">
                      Menu
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-white/66">
                      Browse all navigation options from this right-side panel.
                    </p>
                  </div> */}

                  <div className="ml-auto flex items-center self-start">
                    <motion.button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.06, rotate: 90 }}
                      whileTap={{ scale: 0.94, rotate: 135 }}
                      transition={{ type: "spring", stiffness: 320, damping: 20 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.14] text-white shadow-[0_10px_24px_rgba(8,34,68,0.16)] backdrop-blur-md transition hover:bg-white/22"
                      aria-label="Close navigation menu"
                    >
                      <X className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>

                <div className="mt-8 h-px w-full bg-white/16" />

                <div className="mt-8 flex-1 overflow-y-auto pr-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 18 }}
                      transition={{ delay: 0.06 + index * 0.04, duration: 0.28 }}
                      className="border-b border-white/14 py-5"
                    >
                      <div className="flex w-full flex-col gap-4">
                        <Link
                          href={link.href}
                          className="font-['Fraunces'] text-[1.55rem] font-medium leading-none text-white transition hover:text-[#F4FFFB]"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                        {link.children ? (
                          <div className="pl-1">
                            {/* <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">
                              Explore
                            </p> */}
                            <div className="flex flex-col gap-3 border-l border-white/20 pl-4">
                              {link.children.map((child, childIndex) => (
                                <motion.div
                                  key={child.label}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -4 }}
                                  transition={{ delay: 0.1 + index * 0.04 + childIndex * 0.03, duration: 0.22 }}
                                >
                                  <Link
                                    href={child.href}
                                    className="text-sm font-semibold uppercase tracking-[0.22em] text-white/88 transition hover:translate-x-1 hover:text-[#F4FFFB]"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <p className="max-w-[280px] text-sm leading-7 text-white/72">
                            Visit the {link.label.toLowerCase()} section for more details and updates.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="absolute left-16 top-[40px] hidden -translate-y-1/2 items-center min-[1540px]:flex min-[1540px]:left-8 min-[1540px]:scale-[0.92] min-[1540px]:origin-left">
        <a
          href="/#location-selector"
          onClick={handleSelectCityClick}
          className="group inline-flex items-center rounded-full border border-[rgba(255,255,255,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_100%)] p-[1px] shadow-[0_10px_24px_rgba(8,34,68,0.22)] backdrop-blur-md transition-all duration-300 ease-out hover:border-[rgba(255,255,255,0.3)] hover:shadow-[0_16px_30px_rgba(8,34,68,0.28)]"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_100%)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFFFFF] backdrop-blur-md">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
              <MapPin className="w-3.5 h-3.5" />
            </span>
            <span className="text-[#FFFFFF]">
              {location === "Select City" ? "Click to select city" : location}
            </span>
          </span>
        </a>
      </div>

      <div className="absolute right-6 top-[40px] hidden -translate-y-1/2 items-center gap-3 min-[1540px]:flex min-[1540px]:right-4 min-[1540px]:gap-2 min-[1540px]:origin-right">
        <ApplyAdmissionButton />
        <button
          type="button"
          onClick={handleLoginClick}
          className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_12px_28px_rgba(13,59,102,0.25)] backdrop-blur-md transition-all duration-300 ease-out hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--accent))] hover:text-white hover:shadow-[0_18px_35px_rgba(226,61,104,0.35)] active:scale-[0.98] min-[1536px]:scale-[0.94] min-[1536px]:gap-1.5 min-[1536px]:px-3 min-[1536px]:tracking-[0.16em]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white shadow-[0_6px_12px_rgba(226,61,104,0.35)] transition group-hover:bg-white/25 group-hover:text-white">
            <User className="w-3.5 h-3.5" />
          </span>
          Login
        </button>
      </div>

      <Dialog
        open={isLoginOpen}
        onOpenChange={(open) => {
          setIsLoginOpen(open);
          if (open) {
            setLoginView("login");
          }
        }}
      >
        <DialogContent className="w-[min(94vw,480px)] max-w-[480px] overflow-hidden border border-white/20 bg-white p-0 shadow-[0_34px_90px_rgba(8,23,46,0.42)] sm:rounded-lg">
          <DialogTitle className="sr-only">
            {loginView === "reset" ? "Reset your password" : "Sign in"}
          </DialogTitle>
          <div className="grid">
            <div className="relative min-h-[78px] overflow-hidden bg-[linear-gradient(145deg,#071a31_0%,#0d3b66_58%,#0b2849_100%)] px-6 py-4 text-white">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "34px 34px",
                  }}
                />
                <span className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.36),transparent_70%)] blur-2xl" />
                <span className="absolute -bottom-24 left-6 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] blur-3xl" />
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-[0_16px_36px_rgba(0,0,0,0.2)]">
                    <img src={logo} alt="Sri Chaitanya logo" className="h-11 w-11 object-contain" />
                  </span>
                  <div>
                    <p className="font-['Cinzel_Decorative'] text-xl font-bold leading-none text-[#ffff]">
                      Sri Chaitanya
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-[hsl(var(--accent))]">
                      Schools
                    </p>
                  </div>
                </div>

                <div className="mt-auto" />
              </div>
            </div>

            <div
              className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 sm:p-5"
              style={{ perspective: "1200px" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {loginView === "login" ? (
                  <motion.form
                    key="login-form"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-3"
                    style={{ transformOrigin: "center top", transformStyle: "preserve-3d" }}
                    onSubmit={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <div className="space-y-3">
                      <Label className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--primary)/0.7)]">
                        Login as
                      </Label>
                      <RadioGroup
                        value={loginRole}
                        onValueChange={handleLoginRoleChange}
                        className="grid grid-cols-2 gap-3"
                      >
                        {[
                          { value: "parent", label: "Parent", helper: "Student access" },
                          { value: "teacher", label: "Teacher", helper: "Staff access" },
                        ].map((role) => (
                          <Label
                            key={role.value}
                            htmlFor={`login-role-${role.value}`}
                            className={`cursor-pointer rounded-lg border p-4 shadow-sm transition ${
                              loginRole === role.value
                                ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent)/0.08)] text-[hsl(var(--primary))] shadow-[0_12px_28px_rgba(226,61,104,0.12)]"
                                : "border-slate-200 bg-white text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.3)]"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <RadioGroupItem id={`login-role-${role.value}`} value={role.value} />
                              <span>
                                <span className="block text-sm font-semibold">{role.label}</span>
                                <span className="mt-1 block text-xs text-[hsl(var(--primary)/0.55)]">
                                  {role.helper}
                                </span>
                              </span>
                            </span>
                          </Label>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-identifier" className="text-sm font-semibold text-[hsl(var(--primary))]">
                          {loginRole === "teacher" ? "Employee ID" : "Admission No."}
                        </Label>
                        <Input
                          id="login-identifier"
                          type="text"
                          placeholder={loginRole === "teacher" ? "Enter employee ID" : "Enter admission number"}
                          autoComplete="username"
                          value={loginIdentifier}
                          onChange={(event) => {
                            setLoginIdentifier(
                              loginRole === "parent"
                                ? normalizeParentIdentifier(event.target.value)
                                : event.target.value,
                            );
                          }}
                          onKeyDown={(event) => {
                            if (
                              loginRole === "parent" &&
                              (event.key === "Backspace" || event.key === "Delete") &&
                              event.currentTarget.selectionStart !== null &&
                              event.currentTarget.selectionStart <= 3 &&
                              event.currentTarget.selectionEnd !== null &&
                              event.currentTarget.selectionEnd <= 3
                            ) {
                              event.preventDefault();
                            }
                          }}
                          className="h-11 rounded-lg border-slate-200 bg-white shadow-sm focus-visible:ring-[hsl(var(--accent))]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password" className="text-sm font-semibold text-[hsl(var(--primary))]">
                          Password
                        </Label>
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="Enter password"
                          autoComplete="current-password"
                          className="h-11 rounded-lg border-slate-200 bg-white shadow-sm focus-visible:ring-[hsl(var(--accent))]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 text-sm">
                      <Label
                        htmlFor="remember-me"
                        className="flex cursor-pointer items-center gap-2 text-sm text-[hsl(var(--primary)/0.65)]"
                      >
                        <Checkbox id="remember-me" />
                        Remember me
                      </Label>
                      <button
                        type="button"
                        onClick={handleForgotClick}
                        className="font-semibold text-[hsl(var(--primary))] underline-offset-4 transition hover:text-[hsl(var(--accent))] hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <Button
                      type="submit"
                      className="bg-admission-gradient h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_34px_rgba(242,79,143,0.28)] transition hover:brightness-105"
                    >
                      Sign in
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="reset-form"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                    style={{ transformOrigin: "center top", transformStyle: "preserve-3d" }}
                  >
                    <div>
                      <h2 className="font-['Fraunces'] text-2xl font-semibold text-[hsl(var(--primary))]">
                        Reset your password
                      </h2>
                      <p className="mt-1 text-sm text-[hsl(var(--primary)/0.62)]">
                        Enter your registered email or mobile number.
                      </p>
                    </div>

                    <form
                      className="space-y-4"
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="forgot-identifier" className="text-sm font-semibold text-[hsl(var(--primary))]">
                          Email or Mobile
                        </Label>
                        <Input
                          id="forgot-identifier"
                          type="text"
                          placeholder="name@example.com"
                          autoComplete="username"
                          className="h-11 rounded-lg border-slate-200 bg-white shadow-sm focus-visible:ring-[hsl(var(--accent))]"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="bg-admission-gradient h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_34px_rgba(242,79,143,0.28)] transition hover:brightness-105"
                      >
                        Send reset link
                      </Button>
                    </form>

                    <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                      <span>We will never share your details.</span>
                      <button
                        type="button"
                        onClick={() => setLoginView("login")}
                        className="font-medium text-[hsl(var(--primary))] hover:underline"
                      >
                        Back to login
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
