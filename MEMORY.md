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

## Known Issues

- Real production domain is still unknown; deploys must set `NEXT_PUBLIC_SITE_URL` before public launch.
- Build-time placeholder env warning script lives at `scripts/check-env.mjs`; it warns but does not fail production builds.
- Local verification commands: `npm run test`, `npm run lint`, `npm run build`, and `npm audit --audit-level=moderate`.
- Browser QA checked desktop 1440px and mobile 390px; mobile overflow was fixed with `min-w-0` on grid/flex columns.

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
