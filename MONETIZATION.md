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
| 百度智能云 | https://cloud.baidu.com/campaign/experience/index.html?track=cc19d5069f9b5a93c16c23d79df4ab75003a3209e79e0086#company-hot | connected | 已接入 Mona 的 3 个百度智能云公开推广活动链接，主访问按钮默认使用新客特惠专场。 |
| UCloud | https://passport.ucloud.cn?cps_code=82uZz69HIZDFBpAOoe61kR | connected | 已接入 Mona 的 UCloud U 大使专属邀新链接，后台推广素材页复制所得。 |
| 锐成云 | https://www.racent.com/affiliate | pending | 本轮尝试注册未能完成，先暂缓；后续如已有账号或注册条件可满足，再回来获取专属链接。 |
| 网宝 | https://www.idcpay.com/affiliate.html | pending | 登录后卡在个人实名认证，要求微信实名、姓名和身份证号；Mona 反馈实名认证不了，先暂缓。 |
| 又拍云 | https://console.upyun.com/register/?invite=0zBpu9y-f | connected | 已接入 Mona 的又拍云大使公开邀请链接，适合 CDN、云存储和站长流量。 |
| 七牛云 | https://s.qiniu.com/q2Abim | connected | 已接入 Mona 的七牛云新推官专属推广链接；当前青铜等级返佣 25%，等级提升后最高可到 35%。 |
| 京东云 | https://3.cn/-2VSyISI | connected | 已接入 Mona 的京东云云推客公有云推荐返利链接；适合云服务器、数据库、安全和企业上云内容导流。 |
| 京美建站 | https://3.cn/2V-Sywtm | connected | 已接入 Mona 的京东云云推客京美建站 SaaS 版推荐返利链接；适合企业官网、小程序和模板建站流量。 |
| 淘宝联盟精选 | https://pub.alimama.com/ | pending | 已登录阿里妈妈并找到 PID `mm_99391035_322400376_89025600014`；当前官方推荐频道页在转链时返回“该链接不支持转化”，需更换支持转化的链接。 |
| 京东联盟 | https://union.jd.com/ | pending | 官方电商 CPS 联盟；普通网站媒体此前遇到 ICP 备案要求，需备案或改用其他媒体路径后再转链。 |
| 多多进宝 | https://jinbao.pinduoduo.com/ | available | 拼多多旗下官方 CPS 推广返佣平台；需 Mona 登录并配置渠道后复制活动/商品推广链接。 |
| 唯品会联盟 | https://union.vip.com/ | available | 官方联盟提供推广商品和 CPS 收益分成；需 Mona 注册/登录并确认协议后复制推广链接。 |
| 百度联盟 | https://union.baidu.com/ | available | 站点广告联盟变现平台；需在网站内容、备案/资质和流量满足平台要求后申请广告位。 |
| 苏宁联盟 | https://sums.suning.com/ | available | 官方 CPS 推广联盟，可领取商品/店铺/活动/频道推广链接；需 Mona 登录并配置媒体/推广位。 |
| 美团联盟 | https://union.meituan.com/ | available | 官方页面说明入驻、登记媒体和推广位后可获取推广链接并结算佣金；需 Mona 完成资质认证。 |
| 携程联盟 | https://u.ctrip.com/ | available | 旅行产品分销推广入口，佣金政策以联盟后台公告为准；需 Mona 注册/登录后取链。 |
| 同程联盟 | https://union.ly.com/web/brokerage | available | 官方佣金页说明按销售额返点，适合旅行产品导流；需 Mona 登录后配置推广渠道。 |
| 滴滴联盟 | https://union.didi.cn/ | available | 官方联盟页说明注册/登录后可通过接入流程获得收益，覆盖出行、货运、代驾、租车等业务。 |
| 飞猪联盟开放平台 | https://sht-front.fliggy.com/ | available | 官方页面说明可备案推广、获取推广资料、查看推广订单和收入结算；需 Mona 登录后取链。 |
| 去哪儿开放平台 | https://open.qunar.com/ | pending | 官方开放平台提供旅行资源开放；是否适合个人/网站 CPS 需登录或商务确认。 |
| 聚推客联盟 | https://www.jutuike.com/ | available | 第三方 CPS/CPA 聚合平台；只作为补充渠道，需逐项确认活动授权和结算规则。 |
| 抖音精选联盟 | https://buyin.jinritemai.com/ | available | 抖音电商官方商品推广平台；需 Mona 确认达人/机构权限、商品橱窗和带货资格。 |
| 快手联盟 | https://m-u.kuaishou.com/ | available | 快手生态商业化与推广合作入口；需 Mona 登录后确认推广权限和可投放链接。 |
| 小红书蒲公英 | https://pgy.xiaohongshu.com/ | available | 小红书官方内容种草与直播合作平台；偏内容合作，不等同普通 CPS 链接。 |
| B站悬赏计划 | https://www.bilibili.com/blackboard/activity-BPiQy33YHl.html | available | B站官方带货服务入口，UP 主可通过多种内容位带货并获得销售分成。 |
| 华为云 | https://activity.huaweicloud.com/cps/index.html | paused | 官方公告称奖励推广计划已于 2026-01-30 起暂停运营，当前不作为新注册推广入口。 |

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
3. If the dashboard requires real-name verification, Mona completes it manually before Codex continues.
4. Do not save password, token, cookie, payout account, tax form, or dashboard screenshot in Git.
5. After approval, Mona gives Codex only the public affiliate tracking URL.
6. Codex updates `affiliateUrl`, sets `affiliateStatus: "connected"`, and keeps `affiliateProgramUrl` for auditability.

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

## Current Blockers

- 阿里妈妈：账号已登录，已有审核通过媒体 `爱分享(手机客户端专享)_99391035` 和推广位 PID `mm_99391035_322400376_89025600014`。已切换到 `他方平台 / 社交平台`、媒体 `爱分享(手机客户端专享)_99391035`、推广位 `爱分享` 并确认，但官方推荐频道页 `https://mo.m.taobao.com/common/page_haohuo?__t__=1612358774351` 返回“该链接不支持转化”。下一步应换具体商品、飞猪/阿里云可转链页面，或从阿里妈妈素材库复制已生成链接。
- UCloud：已接入 U 大使推广素材页顶部“复制邀新链接”得到的公开链接 `https://passport.ucloud.cn?cps_code=82uZz69HIZDFBpAOoe61kR`；当前可见活动卡片的“复制推广链接”也返回同一 tracking 链接。
- 锐成云：本轮从推广联盟页进入注册页后无法完成注册，先暂缓，不再继续卡在该平台。
- 网宝：登录后进入个人实名认证页，要求微信实名认证、真实姓名和身份证号；Mona 反馈实名认证不了，先暂缓。
- 新增待申请平台：锐成云、网宝、京东联盟、多多进宝、唯品会联盟、百度联盟、苏宁联盟、美团联盟、携程联盟、同程联盟、滴滴联盟、飞猪联盟开放平台、去哪儿开放平台、聚推客联盟、抖音精选联盟、快手联盟、小红书蒲公英、B站悬赏计划。下一步逐个登录/注册，复制公开可投放的专属链接后再改为 `connected`。
- 七牛云：新推官已加入成功，CPS 推广概览显示专属推广链接 `https://s.qiniu.com/q2Abim`。当前等级为青铜，返佣 25%。
- 京东联盟普通 CPS：创建网站媒体要求填写已完成备案域名的 ICP 备案号；`gexinn.com` 当前未备案，暂不走该路径。京东云云推客是独立路径，已接入公有云组织推广链接 `https://3.cn/-2VSyISI` 和京美建站组织推广链接 `https://3.cn/2V-Sywtm`。
