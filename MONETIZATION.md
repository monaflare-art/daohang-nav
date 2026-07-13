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
- `affiliateProgramUrl`: public signup or partner program URL.
- `affiliateStatus`: `none`, `available`, `pending`, or `connected`.
- `commissionType`: `one-time`, `recurring`, `lead`, `partner`, or `unknown`.
- `commissionNote`: short public note about what the program claims or requires.
- `promotionLabel`: user-facing badge such as `高佣金`, `可申请`, or `待申请`.
- `riskLevel`: `low`, `medium`, or `high`.

## First Monetization Queue

| Resource | Program URL | Status | Why |
| --- | --- | --- | --- |
| Hostinger | https://www.hostinger.com/affiliates | available | Hosting affiliate programs are high-intent and can convert from tutorial/search traffic. |
| Notion | https://www.notion.com/affiliates | available | Official affiliate page exists and fits productivity/workflow content. |
| Vercel | https://vercel.com/legal/affiliate-marketing-terms | available | Official affiliate terms / partner path exists, but approval details need account-side verification. |
| Canva | https://www.canva.com/help/canva-affiliate-marketing-program/ | pending | Official path points to Canvassador/Creator-style programs and may not always be open. |

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
