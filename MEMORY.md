# MEMORY.md

## Project Identity

- Project name: general-resource-nav
- Repository: local Git repository; remote origin not configured yet
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

## Known Issues

- GitHub remote origin is not configured yet, so push will be blocked until the repository is created and linked.
- Local verification commands: `npm run lint`, `npm run build`, and `npm audit --audit-level=moderate`.
- Browser QA checked desktop 1440px and mobile 390px; mobile overflow was fixed with `min-w-0` on grid/flex columns.

## User Preferences

- 默认中文沟通
- 代码、命令、变量名用英文
- 结论先行
- 解释技术选择时说明业务影响

## External Resources

- Reference site: https://www.weidus.com/ used for information architecture inspiration only
- GitHub:
- Server:
- Deployment: Vercel
- Credentials location only:
