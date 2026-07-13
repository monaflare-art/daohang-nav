# MEMORY.md

## Project Identity

- Project name: general-resource-nav
- Repository: https://github.com/monaflare-art/daohang-nav
- Main goal: Build a Chinese general resource navigation site with dense categories, resource cards, rankings, articles, and a submission page.
- Current stage: V1 implementation

## Tech Stack

- Language: TypeScript
- Framework: Next.js App Router + React
- Package manager: npm
- Deployment: Vercel target, static/local data first

## Important Decisions

- V1 uses local TypeScript data files instead of a database or CMS to ship faster and keep maintenance simple.
- V1 does not include accounts, bookmark import, or a moderation backend.
- Submission flow uses a prefilled `mailto:` link first; no external database writes in V1.
- The directory intentionally excludes piracy, cracked software, magnet download, and obvious copyright-risk resources.
- `package.json` uses npm `overrides` to force `postcss@8.5.10`, fixing the moderate audit issue from Next's nested PostCSS dependency without downgrading Next.
- SEO production readiness now depends on deployment env vars: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, `NEXT_PUBLIC_SUBMIT_EMAIL`, and optional `NEXT_PUBLIC_SUBMIT_FORM_URL`.
- OpenGraph, JSON-LD, semantic breadcrumbs, category canonical URLs, skip-link, focus-visible styles, and reduced-motion handling were added after production-readiness review.
- Resource data was refactored from positional tuples to named object literals to reduce content-entry mistakes.
- Resource click tracking is global via `ResourceClickTracker`: updates local recent visits and sends Plausible `Resource Click` events when Plausible is configured.
- Homepage visual direction was revised toward the reference navigation-site structure: fixed category rail, large search block, hot searches, compact quick links, favicon resource cards, category resource directory blocks, and right-side ranking/news panels.
- UI visual direction was upgraded to a premium SaaS workspace inspired by Linear, Vercel, Raycast, Apple, and Notion; reusable design primitives live in `src/components/design-system.tsx` and global tokens live in `src/app/globals.css`.
- After user feedback that the prior version still looked like a traditional navigation site, the homepage was redesigned again into a stronger Resource OS app shell: dark fixed sidebar, top command bar, large central workspace hero, bento-style featured/workflow modules, and right-side insight rail. Homepage hides the global header/footer to avoid legacy navigation-site chrome.
- Product Design workflow selected visual option 1, Command Center. Homepage now follows a light command-center layout with a narrow left rail, large interactive command search, recommended resource table/list, workflow shortcuts, and right-side insight rail.
- After continued visual feedback, the Command Center homepage replaced text-symbol rail controls with local SVG icon components, compressed the category card wall into a compact index-style directory table, and hides the redundant top command bar on mobile.
- User clarified the product target: build a navigation site structurally comparable to weidus.com, with broad content coverage and explicit monetization through promotable/affiliate resources, while avoiding direct copying and copyright-risk content.
- Affiliate-ready resource model added: resources can now store `affiliateUrl`, `affiliateProgramUrl`, `affiliateStatus`, `commissionType`, `commissionNote`, `promotionLabel`, and `riskLevel`; outbound links prefer `affiliateUrl` when available.

## Known Issues

- Real production domain is still unknown; deploys must set `NEXT_PUBLIC_SITE_URL` before public launch.
- Build-time placeholder env warning script lives at `scripts/check-env.mjs`; it warns but does not fail production builds.
- Local verification commands: `npm run test`, `npm run lint`, `npm run build`, and `npm audit --audit-level=moderate`.
- Browser QA checked desktop 1440px and mobile 390px; mobile overflow was fixed with `min-w-0` on grid/flex columns.
- Latest visual QA checked desktop 1440px and mobile 390px after the reference-style homepage redesign; mobile header wrapping was fixed by hiding brand text on small screens.
- Latest visual QA checked desktop 1440x1000 and mobile 390x844 after the premium SaaS redesign; no horizontal overflow was detected, and CTA/nav contrast was fixed by removing the global anchor color override.
- Latest visual QA checked desktop 1440x1000 and mobile 390x844 after the Resource OS shell redesign; no horizontal overflow was detected, homepage global header/footer are hidden, and mobile category scrollbar was hidden.
- Latest Product Design QA checked the Command Center homepage at desktop 1440x1024 and mobile 390x844; `design-qa.md` records final result `passed`.
- Latest visual QA refinement checked desktop 1440x1024 and mobile 390x844 after SVG rail icons and compact directory rows; no horizontal overflow was detected.
- Monetization workflow doc lives at `MONETIZATION.md`; current first registration queue is Hostinger, Notion, Vercel, and Canva.

## User Preferences

- 默认中文沟通
- 代码、命令、变量名用英文
- 结论先行
- 解释技术选择时说明业务影响

## External Resources

- Reference site: https://www.weidus.com/ used for information architecture inspiration only
- GitHub: https://github.com/monaflare-art/daohang-nav
- Server:
- Deployment: Vercel
- Credentials location only:
