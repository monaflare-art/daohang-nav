# Affiliate Navigation Site Playbook

## Goal

Build a navigation site that can earn from promotable resources without copying another directory's data or publishing high-risk resources.

## Workflow

1. Discover candidate resources from public directories, AI knowledge hubs, Product Hunt, GitHub, official partner pages, and user submissions.
2. Verify each candidate through its official website, docs, pricing page, affiliate page, partner page, or terms.
3. Classify monetization:
   - `connected`: Mona already has an affiliate/referral link.
   - `available`: official affiliate, partner, ambassador, or referral program exists but Mona still needs to apply.
   - `pending`: possible program exists but availability, eligibility, or approval status is unclear.
   - `none`: no official monetization path found.
4. Store only public metadata in `src/data/resources.ts`.
5. Store secrets, login sessions, dashboards, payout accounts, and affiliate platform credentials outside Git.
6. Replace `affiliateUrl` after Mona registers and gets an approved tracking link.
7. Re-run `npm run test`, `npm run lint`, and `npm run build`.

## Data Rules

- `url`: official product URL.
- `affiliateUrl`: approved tracking URL after Mona gets it.
- `affiliateLinks`: optional list of multiple approved campaign links for the same resource. Use it for activity, product, article or custom campaign links from the same platform.
- `affiliateProgramUrl`: public signup or partner program URL.
- `affiliateStatus`: `none`, `available`, `pending`, or `connected`.
- `commissionType`: `one-time`, `recurring`, `lead`, `partner`, or `unknown`.
- `commissionNote`: short public note about what the program claims or requires.
- `promotionLabel`: user-facing badge such as `高佣金`, `可申请`, or `待申请`.
- `riskLevel`: `low`, `medium`, or `high`.

## First Monetization Queue

| Resource | Program URL | Status | Why |
| --- | --- | --- | --- |
| 阿里云 | https://www.aliyun.com/minisite/goods?userCode=ltpqlvx9 | connected | 已接入 Mona 的公开推广链接，适合建站/服务器教程转化。 |
| 腾讯云 | https://curl.qcloud.com/Yj3ERuoZ | connected | 已接入 Mona 的 3 个腾讯云公开推广短链，主访问按钮默认使用活动入口 1。 |
| 百度智能云 | https://cloud.baidu.com/campaign/ambassador/index.html | available | 云推广大使邀新返利入口明确，适合 AI 云与企业服务转化。 |
| 又拍云 | https://www.upyun.com/invite | available | 开发者扶持/邀请入口明确，适合 CDN、云存储和站长流量。 |

## Paused Foreign Affiliate Queue

Foreign SaaS affiliate programs are hidden from the public site until the site has enough Chinese traffic, original content, domain trust, and conversion proof.

Paused examples:

- Hostinger
- Notion
- Vercel
- Canva

## Registration SOP

For each resource:

1. Open the official program URL.
2. Mona registers/logs in manually.
3. Do not save password, token, cookie, payout account, tax form, or dashboard screenshot in Git.
4. After approval, Mona gives Codex only the public affiliate tracking URL.
5. Codex updates `affiliateUrl`, sets `affiliateStatus: "connected"`, and keeps `affiliateProgramUrl` for auditability.

## Content Policy

Do not include:

- Pirated film or TV resources.
- Magnet search or illegal download resources.
- Cracked software or license bypass tools.
- Infringing cloud-drive resource dumps.
- Unofficial AI mirrors for private or paid workflows.

Prefer:

- AI tools, coding tools, SaaS, hosting, domains, website builders, productivity tools, design tools, official learning platforms, and legitimate software deals.

## Current Public Content Rule

The public `resources` export only includes China-market resources. Global resources remain in `allResources` for future recovery but are hidden from public pages, search, sitemap, rankings, and resource detail routes.

## Campaign Link Rule

Cloud providers often provide many promotion links. Do not overwrite the brand-level resource for every link.

Use:

- `affiliateUrl`: the default outbound link for the resource card and main CTA.
- `affiliateLinks`: all approved campaign/product links for the detail page, homepage promo blocks, category promos and future articles.

When a screenshot or dashboard does not clearly identify which short link belongs to which product, keep the label generic until Mona confirms the mapping.
