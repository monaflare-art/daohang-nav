# MEMORY.md

## Project Identity

- Project name: general-resource-nav
- Repository: https://github.com/monaflare-art/daohang-nav
- Main goal: Build 极新导航 Gexinn, a Chinese general resource navigation site with dense categories, resource cards, rankings, articles, and a submission page.
- Current stage: V1 implementation

## Tech Stack

- Language: TypeScript
- Framework: Next.js App Router + React
- Package manager: npm
- Deployment: Vercel, static/local data first

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
- Reference-site expansion rule: use weidus.com as a discovery source only; do not wholesale copy its database, descriptions, images, or high-risk resource categories. Add resources in batches after official URL verification, rewritten descriptions, and copyright/advertising-risk filtering.
- Affiliate-ready resource model added: resources can now store `affiliateUrl`, `affiliateProgramUrl`, `affiliateStatus`, `commissionType`, `commissionNote`, `promotionLabel`, and `riskLevel`; outbound links prefer `affiliateUrl` when available.
- After multiple foreign affiliate rejections, public resources now hide global/foreign sites and only expose China-market resources via the filtered `resources` export; full data remains in `allResources` for later recovery.

## Known Issues

- Production domain decision: use `https://gexinn.com` for 极新导航 Gexinn. `NEXT_PUBLIC_SITE_URL` remains env-first, but production deploys should set it to `https://gexinn.com`.
- 2026-07-16 deployment: Vercel CLI authenticated as `monaflare-art`; project `monaflare-arts-projects/daohang-nav` was created and deployed. Current temporary production alias: `https://daohang-nav.vercel.app`.
- Vercel project env: production `NEXT_PUBLIC_SITE_URL=https://gexinn.com` is configured. Plausible, submit email, and submit form URL remain unset because no real values were provided.
- Custom domains `gexinn.com` and `www.gexinn.com` are added to the Vercel project. DNSPod records were configured on 2026-07-16: apex `A 216.198.79.1`, apex `A 64.29.17.1`, and `www` `CNAME ad8f0056e39022c6.vercel-dns-017.com.`.
- Vercel `domains verify` returns `configured_correctly` for both `gexinn.com` and `www.gexinn.com`. SSL certificate `cert_l8rVMNRgW8cQMHWjrJVbvxil` covers both domains, renews automatically, and HTTPS returns 200.
- Vercel GitHub auto-deploy connection is complete. The Vercel GitHub App is authorized for `monaflare-art/daohang-nav`, and the Vercel project shows `monaflare-art/daohang-nav` as connected.
- Build-time placeholder env warning script lives at `scripts/check-env.mjs`; it warns but does not fail production builds.
- Local verification commands: `npm run test`, `npm run lint`, `npm run build`, and `npm audit --audit-level=moderate`.
- Browser QA checked desktop 1440px and mobile 390px; mobile overflow was fixed with `min-w-0` on grid/flex columns.
- Latest visual QA checked desktop 1440px and mobile 390px after the reference-style homepage redesign; mobile header wrapping was fixed by hiding brand text on small screens.
- Latest visual QA checked desktop 1440x1000 and mobile 390x844 after the premium SaaS redesign; no horizontal overflow was detected, and CTA/nav contrast was fixed by removing the global anchor color override.
- Latest visual QA checked desktop 1440x1000 and mobile 390x844 after the Resource OS shell redesign; no horizontal overflow was detected, homepage global header/footer are hidden, and mobile category scrollbar was hidden.
- Latest Product Design QA checked the Command Center homepage at desktop 1440x1024 and mobile 390x844; `design-qa.md` records final result `passed`.
- Latest visual QA refinement checked desktop 1440x1024 and mobile 390x844 after SVG rail icons and compact directory rows; no horizontal overflow was detected.
- 2026-07-16 Edge QA checked local production build with `msedge`: desktop homepage and mobile submit page show 极新导航/Gexinn branding correctly; only Edge lazy-image informational console entry appeared, no app error.
- 2026-07-16 Edge QA checked deployed `https://daohang-nav.vercel.app`: desktop homepage and mobile submit page screenshots show 极新导航/Gexinn branding and no obvious layout breakage.
- 2026-07-16 Edge QA checked live production domain `https://gexinn.com`: desktop homepage and mobile submit page screenshots completed after DNS/SSL verification.
- Monetization workflow doc lives at `MONETIZATION.md`; current first registration queue is domestic: 阿里云云大使, 腾讯云推广大使, 百度智能云云推广大使, and 又拍云邀请/联盟.
- 阿里云推广链接已接入：resource `aliyun` uses public `affiliateUrl` `https://www.aliyun.com/minisite/goods?userCode=ltpqlvx9`.
- 腾讯云推广链接已接入：resource `tencent-cloud` uses primary `affiliateUrl` `https://curl.qcloud.com/Yj3ERuoZ` and keeps two extra campaign links in `affiliateLinks`.
- Cloud provider resources now support multiple campaign links through `affiliateLinks`; resource detail pages render a `推广活动链接` section when multiple links are available.
- 阿里云 `affiliateLinks` currently include `云大使折扣补贴推广` and `云小站上云`; both use Mona's public Aliyun tracking URL.
- 百度智能云推广链接已接入：resource `baidu-ai-cloud` uses primary new-customer campaign URL with `track=cc19d5069f9b5a93c16c23d79df4ab75003a3209e79e0086` and keeps enterprise/AI campaign links in `affiliateLinks`.
- UCloud 推广链接已接入：resource `ucloud` uses public U 大使 invite URL `https://passport.ucloud.cn?cps_code=82uZz69HIZDFBpAOoe61kR`; 后台推广素材页顶部“复制邀新链接”和可见活动卡片“复制推广链接”当前都返回该 tracking 链接。
- 2026-07-17 国内推广资源批量扩展：新增 `racent-cloud`、`idcpay`、`jd-union`、`pinduoduo-jinbao`、`vipshop-union`、`baidu-union`，均先标记为 `available` 或 `pending`，等待 Mona 注册/登录并提供公开可投放专属链接后再改为 `connected`。
- 锐成云推广联盟当前审核中：Mona 已完成注册并提交推广联盟申请；官方页面说明人工审核一般 1-3 个工作日，resource `racent-cloud` 保持 `pending`，审核通过后再获取专属推广链接。
- 网宝推广联盟本轮暂缓：登录后进入个人实名认证页，要求微信实名认证、真实姓名和身份证号，Mona 反馈实名认证不了；resource `idcpay` 保持 `pending`。
- 2026-07-17 国内推广资源第二批扩展：新增 `suning-union`、`meituan-union`、`ctrip-union`、`ly-union`，覆盖电商、本地生活和旅行 CPS；均需 Mona 完成登录/资质/媒体配置后复制公开推广链接。
- 2026-07-17 国内推广资源第三批扩展：新增 `didi-union`、`fliggy-union`、`qunar-open`、`jutuike`；`jutuike` 为第三方聚合平台，需只使用授权清晰、结算规则明确的活动链接。
- 2026-07-17 内容/带货平台推广扩展：新增 `douyin-jingxuan`、`kuaishou-union`、`xiaohongshu-pgy`、`bilibili-reward`；这些偏账号内容商业化和带货权限，需 Mona 登录平台确认资格后才能获取可投放链接。
- 又拍云推广链接已接入：resource `upyun` uses public invite URL `https://console.upyun.com/register/?invite=0zBpu9y-f`.
- 阿里妈妈/淘宝联盟已登录并找到审核通过媒体 `爱分享(手机客户端专享)_99391035`、PID `mm_99391035_322400376_89025600014`；resource `taobao-union-deals` 暂为 `affiliateStatus: "pending"`，因为官方推荐频道页 `https://mo.m.taobao.com/common/page_haohuo?__t__=1612358774351` 在频道推广页转换中返回“该链接不支持转化”。
- 七牛云推广链接已接入：resource `qiniu-cloud` uses public `affiliateUrl` `https://s.qiniu.com/q2Abim`; CPS 推广概览显示当前青铜等级返佣 25%，等级提升后最高可到 35%。
- 京东云云推客推广链接已接入：resource `jdcloud-yuntuike` uses public `affiliateUrl` `https://3.cn/-2VSyISI`; 普通京东联盟网站媒体申请要求 ICP 备案号，`gexinn.com` 当前未备案时暂不走该路径。
- 京美建站推广链接已接入：resource `jdcloud-site` uses public `affiliateUrl` `https://3.cn/2V-Sywtm`; 该链接来自京东云云推客京美建站 SaaS 版推荐返利计划。
- 多多进宝推广链接已接入：resource `pinduoduo-jinbao` uses the public long-link for “天降惊喜券” as default `affiliateUrl`; `affiliateLinks` also includes 地区购物补贴、福利频道、中小件家具官补秒杀、开学季家具好物优选 and one 学而思练习册 single-product sample. Strategy: prefer stable channel/activity links and avoid bulk-maintaining many short-lived single-product links.
- 购物类 CPS 暂停公开展示：Mona 明确“先不要这种购物的”；`taobao-union-deals`、`jd-union`、`pinduoduo-jinbao`、`vipshop-union`、`suning-union` are kept in data but marked `visibility: "hidden"`. Continue monetization with cloud, hosting, website builder, tool/SaaS, and ad-network directions first.
- 2026-07-17 非购物推广继续路线：新增 `rainyun`、`yecaoyun`、`landui-cloud`、`hncloud`、`wwdx` as available cloud/hosting affiliate candidates. `baidu-union` is changed to pending because official Baidu Union guidance commonly requires a site older than 1 month and indexed by Baidu; wait for content, indexing and traffic before applying.
- 雨云推广链接已接入：resource `rainyun` uses public affiliate URL `https://www.rainyun.com/MTE4MjAzNw==_`; Rainyun dashboard also shows coupon code `MTE4MjAzNw==` for binding referred users.
- 野草云推广链接已接入：resource `yecaoyun` uses public affiliate URL `https://my.yecaoyun.com/aff.php?aff=7923`; Mona 已完成注册邮箱验证。
- 蓝队云代理分销本轮暂缓：已登录账号并进入代理分销页，点击开通后提示需支付 300 元开通 CPS 代理分销；resource `landui-cloud` 保持 `pending`，待 Mona 明确同意付费后再继续。
- 华纳云合伙人本轮暂缓：Mona 已完成华纳云注册并进入已验证账号；官方合伙人页写明需联系在线客服开通并生成专属推广链接，resource `hncloud` 保持 `pending`。
- 万维电讯推广注册进行中：已进入注册页，当前需要 Mona 完成邮箱验证码、密码和注册提交；完成后进入推广中心获取唯一推广链接。
- 华为云奖励推广计划已于 2026-01-30 起暂停运营，当前不作为新注册推广入口。
- 2026-07-16 reference-site expansion batch 1 added official, low-risk resources from weidus.com homepage signals: Chinese AI assistants, official translate tools, official netdisk/email services, and online image/format tools. Piracy, cracked software, magnet search, unofficial netdisk resource dumps, and adult resources remain excluded.

## User Preferences

- 默认中文沟通
- 代码、命令、变量名用英文
- 结论先行
- 解释技术选择时说明业务影响

## External Resources

- Reference site: https://www.weidus.com/ used for information architecture inspiration only
- GitHub: https://github.com/monaflare-art/daohang-nav
- Server:
- Deployment: Vercel `monaflare-arts-projects/daohang-nav`
- Vercel Git integration: connected to `monaflare-art/daohang-nav`
- Production domain: https://gexinn.com
- Temporary production URL: https://daohang-nav.vercel.app
- Credentials location only:
