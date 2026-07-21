export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  tags: string[];
  relatedResourceSlugs: string[];
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "cheap-cn-cloud-server-guide",
    title: "国内便宜云服务器怎么选",
    excerpt: "新站优先比较价格、备案要求、线路、续费和返佣入口，不要只看大厂品牌。",
    category: "服务器推荐",
    date: "2026-07-19",
    tags: ["云服务器", "VPS", "建站"],
    relatedResourceSlugs: ["rainyun", "yecaoyun", "wwdx", "ucloud"],
    content: [
      "早期导航站更适合承接“便宜云服务器”“免备案建站”“学生服务器”这类明确需求，而不是泛泛地跳转到大厂首页。",
      "优先比较四件事：首年价格、续费价格、是否需要备案、线路是否适合目标用户。便宜不是唯一标准，续费和稳定性更影响长期成本。",
      "已经接入推广链接的资源必须明确标记为推广，并把适合人群和风险写清楚。用户信任比一次点击更重要。",
    ],
  },
  {
    slug: "no-icp-website-hosting-tools",
    title: "免备案建站工具和主机入口",
    excerpt: "适合个人项目、外贸站、工具站和临时验证项目，先找低门槛、可快速上线的服务。",
    category: "建站指南",
    date: "2026-07-19",
    tags: ["免备案", "建站", "主机"],
    relatedResourceSlugs: ["yecaoyun", "wwdx", "jdcloud-site", "upyun", "qiniu-cloud"],
    content: [
      "免备案建站不是越便宜越好，关键是能不能稳定访问、能不能快速部署、后续迁移是否方便。",
      "个人项目可以优先看香港或海外 VPS、虚拟主机、对象存储加 CDN、模板建站工具。企业官网则要更重视售后、域名、SSL 和备案规划。",
      "导航站的推荐页要按场景组织资源，比如个人博客、企业官网、工具站、图片站，而不是只罗列品牌。",
    ],
  },
  {
    slug: "cloud-vendor-campaigns-guide",
    title: "阿里云、腾讯云、百度云、京东云活动怎么选",
    excerpt: "主流云厂商活动入口很多，先按建站、AI 云、企业上云和短期试用场景筛选，再比较首购、续费和迁移成本。",
    category: "云服务选型",
    date: "2026-07-21",
    tags: ["云服务器", "云厂商活动", "国内推广"],
    relatedResourceSlugs: ["aliyun", "tencent-cloud", "baidu-ai-cloud", "jdcloud-yuntuike", "ucloud", "qiniu-cloud", "upyun"],
    content: [
      "主流云厂商的活动页很容易看起来都差不多，但购买决策不应该只看首年低价。个人站长和小项目优先看云服务器、轻量应用服务器、对象存储和 CDN；企业项目则要把数据库、备案、售后、发票和迁移成本一起算进去。",
      "阿里云和腾讯云更适合承接“新手建站”“云服务器优惠”“企业上云”这类通用需求，活动多、产品覆盖广，但也要特别注意续费价格和配置升级成本。导航站里推荐这类入口时，应把它们放在购买决策页，而不是只放一个品牌跳转。",
      "百度智能云更适合 AI 云、大模型、智能识别、企业智能化这类内容场景。京东云云推客和京美建站更适合承接建站 SaaS、企业官网、活动页和低代码建站需求。不同用户进站时的关键词不同，落地页也应该按场景拆分。",
      "如果只是测试一个新站或工具，优先选择小额套餐、明确退款规则、能快速部署的方案。确认业务跑通后，再考虑主流云厂商的长期实例、数据库、对象存储和 CDN 组合，避免一开始就被复杂套餐绑定。",
    ],
  },
  {
    slug: "cdn-object-storage-guide",
    title: "CDN、对象存储和静态资源加速怎么选",
    excerpt: "图片站、下载站、静态站和博客加速不要只看流量包价格，还要看访问区域、回源成本、HTTPS、图片处理和迁移难度。",
    category: "建站指南",
    date: "2026-07-21",
    tags: ["CDN", "对象存储", "静态资源"],
    relatedResourceSlugs: ["upyun", "qiniu-cloud", "ucloud", "aliyun", "tencent-cloud", "baidu-ai-cloud"],
    content: [
      "CDN 和对象存储适合解决两个问题：静态文件放哪里，以及用户访问时够不够快。图片、视频、下载附件、前端静态资源和博客配图，都不适合长期直接压在一台小服务器上。",
      "又拍云和七牛云更适合从图片处理、云存储、CDN 加速这类具体场景切入，适合站长、博客、工具站和内容站。UCloud、阿里云、腾讯云、百度智能云则更适合和云服务器、数据库、企业上云一起做组合方案。",
      "选型时先看访问区域。如果主要用户在国内，优先看国内 CDN 覆盖、备案要求和 HTTPS 证书配置；如果是外贸站或跨境工具，则要额外看海外节点、回源速度和跨境访问稳定性。",
      "最后要看迁移成本。对象存储一旦放了大量图片和附件，后续迁移会涉及域名、路径、缓存、签名 URL 和历史内容。第一版可以小额测试，但正式站点要尽早确定命名规则和备份方案。",
    ],
  },
  {
    slug: "ai-api-saas-tools-guide",
    title: "AI API 和工具 SaaS 怎么选：先看使用场景再看价格",
    excerpt: "把 AI API、接口市场、客服系统、指纹浏览器、代理 IP 和知识库工具放在同一个购买框架里比较，避免只看品牌名和返佣标签。",
    category: "工具选型",
    date: "2026-07-21",
    tags: ["AI API", "工具SaaS", "国内推广"],
    relatedResourceSlugs: ["siliconflow", "api-cloud-market", "z-api", "salesmartly", "adspower", "ipfoxy", "helplook", "qianbi-writing"],
    content: [
      "选 AI API 和工具 SaaS 时，先不要从品牌名开始，而是从要完成的任务开始。只是给项目接入模型能力，优先看硅基流动、APi云市场和 Z-API 这类 API 入口；如果要服务客户、管理咨询和沉淀帮助文档，SaleSmartly 和 HelpLook 更接近真实转化场景。",
      "第二步看成本结构。API 类产品要看调用单价、充值门槛、模型覆盖和是否方便迁移；工具 SaaS 要看月费、团队席位、续费价格和数据导出。价格便宜不等于适合，能减少人工流程的工具才更容易长期留下。",
      "第三步看账号和网络环境。跨境运营、广告验证、批量账号和数据采集场景，通常需要把指纹浏览器、代理 IP、客服系统和采集工具一起评估。AdsPower、IPFoxy、kookeey 这类工具适合放在同一个方案里比较，而不是单独看一个功能点。",
      "最后看风险和替换成本。论文写作、知识库、客服和 API 平台都涉及内容、账号或业务数据，优先选择能导出数据、能控制权限、价格规则透明的服务。导航站推荐入口只解决发现问题，真正下单前仍应按自己的业务场景做一次小额测试。",
    ],
  },
  {
    slug: "api-market-model-api-guide",
    title: "API 接口市场和大模型 API 怎么选",
    excerpt: "开发者接入接口能力时，先区分大模型 API、通用接口市场和轻量接口服务，再比较模型覆盖、调用成本、稳定性和结算规则。",
    category: "工具选型",
    date: "2026-07-21",
    tags: ["API", "大模型API", "接口市场"],
    relatedResourceSlugs: ["siliconflow", "api-cloud-market", "z-api"],
    content: [
      "API 类服务最容易被错误地放在一起比较。大模型 API、通用接口市场、验证码识别、数据查询、短信通知和自动化接口，解决的问题不同，计费方式也不同。先明确要接入什么能力，再看平台。",
      "硅基流动更适合大模型 API、图像生成、视频生成和语音合成场景，适合 AI 应用、Agent、内容生成和开发者原型验证。选这类平台时要重点看模型覆盖、调用价格、并发限制、文档质量和是否方便切换模型。",
      "APi云市场更适合查找通用接口和工具类 API，例如数据服务、识别服务、通知接口和其他开发者能力。Z-API 更适合轻量接口调用和自动化流程。它们更像开发者工具箱，而不是单一模型平台。",
      "真正影响长期成本的不是首充优惠，而是调用量、失败重试、限流、日志排查和迁移难度。导航站推荐 API 服务时，应把适合场景写清楚，避免用户只因为返佣标签点击一个不适合的接口平台。",
    ],
  },
  {
    slug: "cross-border-ops-tools-guide",
    title: "跨境运营工具怎么选：客服、指纹浏览器和代理 IP",
    excerpt: "跨境团队选工具不要单看单个功能，要把客服承接、账号隔离、代理 IP、知识库和团队协作放在同一条转化链路里比较。",
    category: "工具选型",
    date: "2026-07-21",
    tags: ["跨境工具", "指纹浏览器", "代理IP"],
    relatedResourceSlugs: ["salesmartly", "adspower", "ipfoxy", "kookeey", "helplook"],
    content: [
      "跨境运营工具的核心不是工具越多越好，而是每个工具在转化链路里承担什么位置。SaleSmartly 更适合承接多渠道咨询和 AI 客服，HelpLook 更适合搭建帮助中心、知识库和自助问答，二者解决的是客户进入之后的服务效率。",
      "AdsPower 这类指纹浏览器解决的是账号环境隔离和团队协作问题。做海外社媒、广告账户、多店铺或多账号运营时，账号安全、权限管理和操作记录通常比单纯的浏览器功能更重要。",
      "IPFoxy 和 kookeey 这类代理 IP 服务更适合放在网络环境、地区访问、数据采集和广告验证场景里评估。选择代理时要看 IP 类型、地区覆盖、稳定性、计费方式和售后响应，不要只看入口价格。",
      "早期导航站推荐这类工具时，应按场景组合成方案：客服承接、账号环境、代理网络、帮助中心。用户带着明确任务进来时，比看到一堆孤立工具更容易点击，也更容易形成后续付费。",
    ],
  },
  {
    slug: "how-to-use-a-resource-directory",
    title: "如何用导航站减少信息搜索时间",
    excerpt: "把高频入口、垂直分类和临时搜索分开，能明显减少每天重复找工具的时间。",
    category: "效率方法",
    date: "2026-07-05",
    tags: ["导航站", "效率", "信息管理"],
    relatedResourceSlugs: ["notion", "google-docs", "producthunt"],
    content: [
      "导航站的价值不是收录越多越好，而是把常用入口、可信来源和临时探索分层。",
      "建议先固定每天都会用的 20 个入口，再把低频但重要的资源放入分类。",
      "如果一个资源长期不用，应该从首页推荐降级到分类页，避免首页变成杂物间。",
    ],
  },
  {
    slug: "safe-resource-inclusion-policy",
    title: "综合资源导航为什么不收录破解和盗版资源",
    excerpt: "短期流量可能更高，但会伤害广告、联盟、搜索收录和长期品牌安全。",
    category: "运营规则",
    date: "2026-07-05",
    tags: ["内容安全", "SEO", "变现"],
    relatedResourceSlugs: ["github", "awesome-lists", "internet-archive"],
    content: [
      "导航站要长期运营，内容安全比短期点击更重要。",
      "破解软件、盗版影视和磁力下载资源会增加版权投诉、广告平台拒审和域名风险。",
      "更稳的做法是收录官方入口、开源项目、公开数据和合法素材资源。",
    ],
  },
  {
    slug: "first-100-resources-checklist",
    title: "第一版导航站 100 个资源怎么选",
    excerpt: "优先选稳定、官方、可长期使用、能形成分类心智的资源。",
    category: "建站指南",
    date: "2026-07-05",
    tags: ["资源收录", "MVP", "工具站"],
    relatedResourceSlugs: ["alternative-to", "awesome-lists", "mdn"],
    content: [
      "第一版不要追求全，先覆盖用户最高频的任务。",
      "每个一级分类放 6 到 12 个可靠资源，比一次性铺几百个低质量入口更容易维护。",
      "所有推广资源都要显式标记，避免破坏用户信任。",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
