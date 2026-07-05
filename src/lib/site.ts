const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const submitFormUrl = process.env.NEXT_PUBLIC_SUBMIT_FORM_URL;

export const siteConfig = {
  name: "方舟导航",
  url: siteUrl.replace(/\/$/, ""),
  description: "一个高密度、清晰、可持续维护的中文综合资源导航站。",
  email: process.env.NEXT_PUBLIC_SUBMIT_EMAIL ?? "submit@example.com",
  plausibleDomain,
  submitFormUrl,
  ogImage: "/opengraph-image",
};

export function absoluteUrl(path = "") {
  if (!path) {
    return siteConfig.url;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultOgImage = {
  url: absoluteUrl(siteConfig.ogImage),
  width: 1200,
  height: 630,
  alt: siteConfig.name,
};
