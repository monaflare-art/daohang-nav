export type Category = {
  slug: string;
  name: string;
  description: string;
  subcategories: string[];
};

export const categories: Category[] = [
  {
    slug: "ai-tools",
    name: "AI工具集",
    description: "聊天、写作、图像、视频、办公和编程相关 AI 工具。",
    subcategories: ["AI综合", "AI写作", "AI编程", "AI图像", "AI视频", "AI办公"],
  },
  {
    slug: "online-tools",
    name: "在线工具",
    description: "PDF、图片、格式转换、翻译、效率和查询工具。",
    subcategories: ["综合工具", "PDF工具", "图片处理", "格式转换", "翻译工具", "效率工具"],
  },
  {
    slug: "resources",
    name: "资源分享",
    description: "正版软件、公开数据、素材集合、开源合集和学习资源入口。",
    subcategories: ["正版软件", "公开数据", "开源合集", "素材集合", "学习资源"],
  },
  {
    slug: "blogs-forums",
    name: "博客论坛",
    description: "个人博客、开发社区、产品讨论和独立创作者社区。",
    subcategories: ["个人博客", "开发社区", "产品社区", "独立创作者", "问答社区"],
  },
  {
    slug: "dev",
    name: "编程开发",
    description: "代码托管、文档、API、部署、数据库和开发效率工具。",
    subcategories: ["代码托管", "技术文档", "API工具", "部署托管", "数据库", "开发效率"],
  },
  {
    slug: "design",
    name: "设计素材",
    description: "设计协作、图标、字体、配色、图库和灵感来源。",
    subcategories: ["设计协作", "图标素材", "字体排版", "配色工具", "图库素材", "设计灵感"],
  },
  {
    slug: "study-office",
    name: "学习办公",
    description: "笔记、文档、表格、课程、知识管理和办公协作工具。",
    subcategories: ["笔记知识", "文档协作", "表格表单", "在线课程", "办公协作"],
  },
  {
    slug: "life",
    name: "生活服务",
    description: "地图出行、快递查询、便民服务、招聘和二手平台。",
    subcategories: ["便民查询", "地图出行", "快递物流", "求职招聘", "二手交易"],
  },
  {
    slug: "news",
    name: "新闻资讯",
    description: "综合新闻、科技、财经、产品趋势和全球资讯。",
    subcategories: ["综合新闻", "科技数码", "财经资讯", "产品趋势", "全球资讯"],
  },
  {
    slug: "fun",
    name: "趣味网站",
    description: "轻量互动、创意实验、小游戏和有意思的网页作品。",
    subcategories: ["趣站发现", "网页实验", "小游戏", "创意互动"],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
