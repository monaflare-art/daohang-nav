# General Resource Nav

中文综合资源导航站，面向需要快速找到 AI 工具、在线工具、开发资源、设计素材、学习办公、生活服务和资讯入口的用户。

## 当前目标

- 高密度资源导航首页
- 分类锚点和分类页
- 搜索过滤
- 推荐/推广位标记
- 排行榜
- 文章资讯
- 收录提交页
- 资源详情页

## 技术栈

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- 本地 TypeScript 数据文件

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 上线前环境变量

复制 `.env.example` 到部署平台环境变量中，并替换成真实值：

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
NEXT_PUBLIC_SUBMIT_EMAIL=submit@your-domain.com
NEXT_PUBLIC_SUBMIT_FORM_URL=https://forms.gle/your-form-id
```

- `NEXT_PUBLIC_SITE_URL`：必须使用正式域名，否则 sitemap、canonical、OpenGraph URL 会错误。
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`：用于接入 Plausible 统计；不配置则不会加载分析脚本。
- `NEXT_PUBLIC_SUBMIT_FORM_URL`：推荐填 Google Form、Tally 或 Formspree 地址，让提交有后台留痕；不配置时回退到预填邮件。

## 构建检查

```bash
npm run lint
npm run build
```

## 内容原则

- 不复制第三方站点 logo、文案和资源数据。
- 推广或赞助资源必须显示 `推广` 标签。
- 不收录盗版影视、破解软件、磁力下载、侵权网盘资源。
- 失效资源使用 `inactive` 状态灰显。

## 部署

推荐部署到 Vercel。正式上线前必须配置 `NEXT_PUBLIC_SITE_URL`，不要使用默认占位域名。
