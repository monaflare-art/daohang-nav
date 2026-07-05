"use client";

import { useEffect } from "react";

export const recentStorageKey = "general-resource-nav:recent";
export const recentUpdatedEvent = "general-resource-nav:recent-updated";

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function ResourceClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("[data-resource-slug]");
      const slug = link?.getAttribute("data-resource-slug");

      if (!slug) {
        return;
      }

      const raw = window.localStorage.getItem(recentStorageKey);
      const existing = raw ? (JSON.parse(raw) as string[]) : [];
      const next = [slug, ...existing.filter((item) => item !== slug)].slice(0, 8);
      window.localStorage.setItem(recentStorageKey, JSON.stringify(next));
      window.plausible?.("Resource Click", { props: { slug } });
      window.dispatchEvent(new Event(recentUpdatedEvent));
    };

    document.addEventListener("click", onClick);

    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
