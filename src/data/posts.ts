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
