"use client";

import Script from "next/script";

const DEFAULT_RECAPTCHA_SITE_KEY = "6LehS7osAAAAJ6HhLrbJ4xzCXPdvaOqV1RUYn";
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || DEFAULT_RECAPTCHA_SITE_KEY;

const RecaptchaField = () => {
  return (
    <div className="flex justify-center">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <div
        className="g-recaptcha"
        data-sitekey={RECAPTCHA_SITE_KEY}
      />
    </div>
  );
};

export default RecaptchaField;
