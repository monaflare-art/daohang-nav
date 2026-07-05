import { categories } from "@/data/categories";

export type ResourceStatus = "active" | "inactive";

export type Resource = {
  slug: string;
  name: string;
  url: string;
  category: string;
  subcategory: string;
  description: string;
  tags: string[];
  status: ResourceStatus;
  isFeatured: boolean;
  isSponsored: boolean;
  officialLabel: string;
  submittedAt: string;
};

type ResourceSeedRow = [
  slug: string,
  name: string,
  url: string,
  category: string,
  subcategory: string,
  description: string,
  tags: string[],
  isFeatured: boolean,
  isSponsored: boolean,
  officialLabel: string,
];

const resourceRows: ResourceSeedRow[] = [
  ["chatgpt", "ChatGPT", "https://chatgpt.com/", "ai-tools", "AI综合", "通用 AI 助手，适合写作、分析、代码、学习和日常效率任务。", ["AI", "写作", "编程"], true, false, "官方"],
  ["claude", "Claude", "https://claude.ai/", "ai-tools", "AI综合", "擅长长文本阅读、写作、代码解释和复杂任务拆解的 AI 助手。", ["AI", "长文本", "写作"], true, false, "官方"],
  ["perplexity", "Perplexity", "https://www.perplexity.ai/", "ai-tools", "AI综合", "面向搜索和资料整理的 AI 答案引擎，适合快速了解新主题。", ["AI搜索", "资料"], true, false, "官方"],
  ["deepseek", "DeepSeek", "https://www.deepseek.com/", "ai-tools", "AI综合", "中文使用友好的 AI 模型和聊天工具，适合学习、写作和代码辅助。", ["AI", "中文", "编程"], true, false, "官方"],
  ["cursor", "Cursor", "https://www.cursor.com/", "ai-tools", "AI编程", "AI 优先的代码编辑器，适合快速搭建、重构和理解项目。", ["AI编程", "IDE"], true, true, "推广"],
  ["github-copilot", "GitHub Copilot", "https://github.com/features/copilot", "ai-tools", "AI编程", "集成在常见编辑器里的 AI 编程助手，适合补全、解释和生成代码。", ["AI编程", "GitHub"], false, false, "官方"],
  ["midjourney", "Midjourney", "https://www.midjourney.com/", "ai-tools", "AI图像", "高质量 AI 图像生成工具，适合概念图、视觉探索和素材草稿。", ["AI图像", "设计"], false, false, "官方"],
  ["canva-ai", "Canva AI", "https://www.canva.com/ai/", "ai-tools", "AI办公", "把设计、文档、演示和 AI 辅助能力放在一起的在线创作工具。", ["设计", "办公", "AI"], false, false, "官方"],
  ["runway", "Runway", "https://runwayml.com/", "ai-tools", "AI视频", "AI 视频生成与编辑工具，适合短视频创意和视觉实验。", ["AI视频", "创作"], false, false, "官方"],
  ["gamma", "Gamma", "https://gamma.app/", "ai-tools", "AI办公", "用 AI 快速生成演示文稿、网页式文档和内容提案。", ["PPT", "文档", "AI"], false, false, "官方"],

  ["deepl", "DeepL", "https://www.deepl.com/translator", "online-tools", "翻译工具", "高质量机器翻译工具，适合多语言阅读和商务文本初稿。", ["翻译", "多语言"], true, false, "官方"],
  ["google-translate", "Google Translate", "https://translate.google.com/", "online-tools", "翻译工具", "覆盖语言广、入口稳定的在线翻译工具。", ["翻译", "常用"], false, false, "官方"],
  ["ilovepdf", "iLovePDF", "https://www.ilovepdf.com/", "online-tools", "PDF工具", "PDF 合并、压缩、转换和编辑工具集合。", ["PDF", "转换"], true, false, "官方"],
  ["smallpdf", "Smallpdf", "https://smallpdf.com/", "online-tools", "PDF工具", "在线 PDF 工具套件，适合压缩、转换和签署常见文档。", ["PDF", "办公"], false, false, "官方"],
  ["remove-bg", "Remove.bg", "https://www.remove.bg/", "online-tools", "图片处理", "一键移除图片背景，适合电商图、头像和营销素材。", ["抠图", "图片"], true, false, "官方"],
  ["tinypng", "TinyPNG", "https://tinypng.com/", "online-tools", "图片处理", "压缩 PNG、JPEG 和 WebP 图片，适合网页性能优化。", ["图片压缩", "Web"], false, false, "官方"],
  ["cloudconvert", "CloudConvert", "https://cloudconvert.com/", "online-tools", "格式转换", "支持文档、图片、音频、视频等多种格式转换。", ["转换", "文件"], false, false, "官方"],
  ["regex101", "Regex101", "https://regex101.com/", "online-tools", "效率工具", "正则表达式测试和解释工具，适合开发与数据处理。", ["正则", "开发"], false, false, "官方"],
  ["jsonformatter", "JSON Formatter", "https://jsonformatter.org/", "online-tools", "效率工具", "JSON 格式化、校验和查看工具。", ["JSON", "开发"], false, false, "官方"],
  ["carbon", "Carbon", "https://carbon.now.sh/", "online-tools", "效率工具", "把代码片段生成漂亮图片，适合文章和社交媒体分享。", ["代码图片", "分享"], false, false, "官方"],

  ["producthunt", "Product Hunt", "https://www.producthunt.com/", "resources", "公开数据", "发现新产品、工具和创业项目的社区。", ["产品", "创业"], true, false, "官方"],
  ["alternative-to", "AlternativeTo", "https://alternativeto.net/", "resources", "软件资源", "查找软件替代品和同类工具的资源库。", ["软件", "替代品"], true, false, "官方"],
  ["awesome-lists", "Awesome Lists", "https://github.com/sindresorhus/awesome", "resources", "开源合集", "GitHub 上的优质开源资源清单集合。", ["开源", "合集"], true, false, "官方"],
  ["public-apis", "Public APIs", "https://github.com/public-apis/public-apis", "resources", "公开数据", "公开 API 清单，适合做工具站和练手项目。", ["API", "开源"], false, false, "官方"],
  ["kaggle", "Kaggle", "https://www.kaggle.com/datasets", "resources", "公开数据", "公开数据集和机器学习竞赛平台。", ["数据集", "机器学习"], false, false, "官方"],
  ["internet-archive", "Internet Archive", "https://archive.org/", "resources", "学习资源", "互联网档案馆，提供公开网页、书籍、音频和历史资料。", ["档案", "资料"], false, false, "官方"],
  ["unsplash", "Unsplash", "https://unsplash.com/", "resources", "素材集合", "高质量免费图片素材平台，适合网页和内容创作。", ["图片", "素材"], false, false, "官方"],
  ["pexels", "Pexels", "https://www.pexels.com/", "resources", "素材集合", "免费图片和视频素材平台，适合内容创作。", ["图片", "视频"], false, false, "官方"],

  ["github", "GitHub", "https://github.com/", "blogs-forums", "开发社区", "代码托管和开发协作平台，也适合发现开源项目。", ["开源", "代码"], true, false, "官方"],
  ["stackoverflow", "Stack Overflow", "https://stackoverflow.com/", "blogs-forums", "问答社区", "开发者问答社区，适合排查技术问题。", ["问答", "开发"], false, false, "官方"],
  ["v2ex", "V2EX", "https://www.v2ex.com/", "blogs-forums", "产品社区", "中文互联网从业者和开发者社区。", ["社区", "中文"], true, false, "官方"],
  ["indiehackers", "Indie Hackers", "https://www.indiehackers.com/", "blogs-forums", "独立创作者", "独立开发者交流产品、增长和收入经验的社区。", ["独立开发", "创业"], false, false, "官方"],
  ["medium", "Medium", "https://medium.com/", "blogs-forums", "个人博客", "英文文章和个人博客平台，覆盖技术、产品和商业内容。", ["博客", "英文"], false, false, "官方"],
  ["devto", "DEV Community", "https://dev.to/", "blogs-forums", "开发社区", "开发者文章与讨论社区。", ["开发", "博客"], false, false, "官方"],

  ["vercel", "Vercel", "https://vercel.com/", "dev", "部署托管", "前端和 Next.js 项目的快速部署平台。", ["部署", "Next.js"], true, true, "推广"],
  ["netlify", "Netlify", "https://www.netlify.com/", "dev", "部署托管", "适合静态站、前端应用和 Jamstack 项目的部署平台。", ["部署", "前端"], false, false, "官方"],
  ["cloudflare", "Cloudflare", "https://www.cloudflare.com/", "dev", "部署托管", "提供 CDN、DNS、安全、Workers 和边缘计算能力。", ["CDN", "Workers"], true, false, "官方"],
  ["supabase", "Supabase", "https://supabase.com/", "dev", "数据库", "开源 Firebase 替代方案，提供 Postgres、Auth、Storage 和 Realtime。", ["数据库", "后端"], false, false, "官方"],
  ["neon", "Neon", "https://neon.tech/", "dev", "数据库", "Serverless Postgres 平台，适合现代 Web 应用。", ["Postgres", "数据库"], false, false, "官方"],
  ["postman", "Postman", "https://www.postman.com/", "dev", "API工具", "API 调试、文档和协作平台。", ["API", "调试"], false, false, "官方"],
  ["mdn", "MDN Web Docs", "https://developer.mozilla.org/", "dev", "技术文档", "Web 开发权威文档，适合查 HTML、CSS、JavaScript 和 Web API。", ["文档", "Web"], true, false, "官方"],
  ["npmjs", "npm", "https://www.npmjs.com/", "dev", "开发效率", "JavaScript 包管理生态搜索入口。", ["npm", "包管理"], false, false, "官方"],

  ["figma", "Figma", "https://www.figma.com/", "design", "设计协作", "在线设计协作平台，适合 UI、原型和设计系统。", ["UI", "协作"], true, false, "官方"],
  ["dribbble", "Dribbble", "https://dribbble.com/", "design", "设计灵感", "设计作品展示社区，适合寻找视觉灵感。", ["灵感", "设计"], false, false, "官方"],
  ["behance", "Behance", "https://www.behance.net/", "design", "设计灵感", "Adobe 旗下创意作品展示平台。", ["作品集", "设计"], false, false, "官方"],
  ["iconify", "Iconify", "https://iconify.design/", "design", "图标素材", "聚合大量开源图标集，适合开发和设计使用。", ["图标", "开源"], true, false, "官方"],
  ["google-fonts", "Google Fonts", "https://fonts.google.com/", "design", "字体排版", "免费 Web 字体库，适合网页和品牌排版。", ["字体", "Web"], false, false, "官方"],
  ["coolors", "Coolors", "https://coolors.co/", "design", "配色工具", "快速生成和管理配色方案。", ["配色", "设计"], false, false, "官方"],
  ["uiverse", "UIverse", "https://uiverse.io/", "design", "设计灵感", "前端 UI 组件灵感社区，适合寻找交互样式参考。", ["CSS", "组件"], false, false, "官方"],

  ["notion", "Notion", "https://www.notion.so/", "study-office", "笔记知识", "笔记、知识库、项目管理和轻量数据库工具。", ["笔记", "知识库"], true, false, "官方"],
  ["obsidian", "Obsidian", "https://obsidian.md/", "study-office", "笔记知识", "本地 Markdown 知识管理工具，适合长期笔记和双链组织。", ["Markdown", "知识管理"], false, false, "官方"],
  ["google-docs", "Google Docs", "https://docs.google.com/", "study-office", "文档协作", "在线文档协作工具，适合多人编辑和分享。", ["文档", "协作"], false, false, "官方"],
  ["airtable", "Airtable", "https://www.airtable.com/", "study-office", "表格表单", "表格和轻量数据库结合的协作工具。", ["表格", "数据库"], false, false, "官方"],
  ["coursera", "Coursera", "https://www.coursera.org/", "study-office", "在线课程", "在线课程平台，覆盖大学课程、职业技能和证书。", ["课程", "学习"], false, false, "官方"],
  ["edx", "edX", "https://www.edx.org/", "study-office", "在线课程", "提供大学和机构课程的在线学习平台。", ["课程", "学习"], false, false, "官方"],

  ["google-maps", "Google Maps", "https://www.google.com/maps", "life", "地图出行", "地图、路线和地点查询工具。", ["地图", "出行"], false, false, "官方"],
  ["amap", "高德地图", "https://www.amap.com/", "life", "地图出行", "国内地图、路线规划和出行服务入口。", ["地图", "国内"], true, false, "官方"],
  ["kuaidi100", "快递100", "https://www.kuaidi100.com/", "life", "快递物流", "快递单号查询和物流服务入口。", ["快递", "查询"], true, false, "官方"],
  ["linkedin", "LinkedIn", "https://www.linkedin.com/", "life", "求职招聘", "职业社交、招聘和个人职业展示平台。", ["招聘", "职业"], false, false, "官方"],
  ["boss", "BOSS直聘", "https://www.zhipin.com/", "life", "求职招聘", "国内求职招聘平台。", ["招聘", "求职"], false, false, "官方"],
  ["xianyu", "闲鱼", "https://www.goofish.com/", "life", "二手交易", "二手交易和闲置物品流转平台。", ["二手", "交易"], false, false, "官方"],

  ["bbc", "BBC", "https://www.bbc.com/", "news", "全球资讯", "国际新闻和全球资讯平台。", ["新闻", "全球"], false, false, "官方"],
  ["reuters", "Reuters", "https://www.reuters.com/", "news", "全球资讯", "国际新闻通讯社，适合关注全球商业和时事。", ["新闻", "全球"], false, false, "官方"],
  ["36kr", "36氪", "https://36kr.com/", "news", "科技数码", "中文科技、商业和创投资讯平台。", ["科技", "商业"], true, false, "官方"],
  ["huxiu", "虎嗅", "https://www.huxiu.com/", "news", "产品趋势", "商业、科技和产业观察内容平台。", ["商业", "趋势"], false, false, "官方"],
  ["theverge", "The Verge", "https://www.theverge.com/", "news", "科技数码", "英文科技、消费电子和互联网文化媒体。", ["科技", "英文"], false, false, "官方"],
  ["ycombinator-news", "Hacker News", "https://news.ycombinator.com/", "news", "产品趋势", "创业、开发和科技新闻社区。", ["创业", "技术"], true, false, "官方"],

  ["neal-fun", "Neal.fun", "https://neal.fun/", "fun", "趣站发现", "一组有趣的网页互动实验。", ["趣味", "互动"], true, false, "官方"],
  ["pointer-pointer", "Pointer Pointer", "https://pointerpointer.com/", "fun", "趣站发现", "根据鼠标位置匹配图片的趣味网页。", ["趣味", "网页"], false, false, "官方"],
  ["radio-garden", "Radio Garden", "https://radio.garden/", "fun", "创意互动", "在地球仪上收听世界各地电台。", ["电台", "互动"], true, false, "官方"],
  ["little-alchemy", "Little Alchemy", "https://littlealchemy.com/", "fun", "小游戏", "轻量合成类网页小游戏。", ["小游戏", "休闲"], false, false, "官方"],
  ["weavesilk", "Silk", "http://weavesilk.com/", "fun", "网页实验", "用鼠标绘制对称光线图案的互动网站。", ["绘画", "互动"], false, false, "官方"],
  ["windows93", "Windows 93", "https://www.windows93.net/", "fun", "网页实验", "复古操作系统风格的网页实验。", ["复古", "实验"], false, false, "官方"],
];

const resourcesSeed: Resource[] = resourceRows.map(([slug, name, url, category, subcategory, description, tags, isFeatured, isSponsored, officialLabel]) => ({
  slug,
  name,
  url,
  category,
  subcategory,
  description,
  tags,
  status: "active" as const,
  isFeatured,
  isSponsored,
  officialLabel,
  submittedAt: "2026-07-05",
}));

export const resources: Resource[] = resourcesSeed.map((resource) => ({
  ...resource,
  category: categories.some((category) => category.slug === resource.category)
    ? resource.category
    : "resources",
}));

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getResourcesByCategory(categorySlug: string) {
  return resources.filter((resource) => resource.category === categorySlug);
}

export function getFeaturedResources() {
  return resources.filter((resource) => resource.isFeatured).slice(0, 18);
}

export function getRankingResources() {
  return [...resources].sort((a, b) => {
    if (a.isSponsored !== b.isSponsored) {
      return Number(b.isSponsored) - Number(a.isSponsored);
    }
    if (a.isFeatured !== b.isFeatured) {
      return Number(b.isFeatured) - Number(a.isFeatured);
    }
    return a.name.localeCompare(b.name);
  });
}
