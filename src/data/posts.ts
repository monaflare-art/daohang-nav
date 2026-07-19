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
