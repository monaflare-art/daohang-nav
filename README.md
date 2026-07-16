# 极新导航 Gexinn

发现更好的网站、工具与资源。

极新导航（Gexinn）是中文综合资源导航站，面向需要快速找到 AI 工具、在线工具、开发资源、设计素材、学习办公、生活服务和资讯入口的用户。

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
NEXT_PUBLIC_SITE_URL=https://gexinn.com
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
NEXT_PUBLIC_SUBMIT_EMAIL=
NEXT_PUBLIC_SUBMIT_FORM_URL=
```

- `NEXT_PUBLIC_SITE_URL`：生产环境使用 `https://gexinn.com`，用于 sitemap、canonical、OpenGraph 和 JSON-LD URL。
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`：用于接入 Plausible 统计；没有真实值时保持空，不会加载分析脚本。
- `NEXT_PUBLIC_SUBMIT_EMAIL`：用于邮件提交入口；没有真实值时保持空，不生成假邮箱。
- `NEXT_PUBLIC_SUBMIT_FORM_URL`：推荐填 Google Form、Tally 或 Formspree 地址，让提交有后台留痕；没有真实值时保持空。

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

推荐部署到 Vercel。生产环境必须配置 `NEXT_PUBLIC_SITE_URL=https://gexinn.com`，不要使用 `example.com` 或其他占位域名。

当前 GitHub 仓库：`monaflare-art/daohang-nav`

当前计划域名：

- 主域名：`gexinn.com`
- WWW：`www.gexinn.com`

域名尚未解析时，可以先使用 Vercel 提供的 `vercel.app` 临时地址验收。DNS 记录以 Vercel 项目 Domains 页面给出的要求为准。

## DNS 待办

域名 `gexinn.com` 当前尚未解析。完成 Vercel 项目绑定后，在域名服务商后台添加以下记录，并回到 Vercel Domains 页面等待校验：

| 主机记录 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| `@` | `A` | `76.76.21.21` | `gexinn.com` 根域指向 Vercel |
| `www` | `CNAME` | `cname.vercel-dns-0.com` | `www.gexinn.com` 指向 Vercel |

注意：Vercel Domains 页面可能按项目状态给出额外验证记录或带尾点的 CNAME 值，最终以 Vercel 页面显示为准。

## 当前部署状态

- GitHub 仓库已确定为 `monaflare-art/daohang-nav`。
- Vercel CLI 本机暂无登录凭据；无法在本地直接创建 Vercel 项目、配置生产环境变量或添加自定义域名。
- 需要 Vercel 登录后配置生产环境变量：`NEXT_PUBLIC_SITE_URL=https://gexinn.com`。
- Plausible、提交邮箱、提交表单尚无真实值，保持未配置。
