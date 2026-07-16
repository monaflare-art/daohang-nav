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

项目部署到 Vercel。生产环境必须配置 `NEXT_PUBLIC_SITE_URL=https://gexinn.com`，不要使用 `example.com` 或其他占位域名。

- GitHub 仓库：`monaflare-art/daohang-nav`
- Vercel 项目：`monaflare-arts-projects/daohang-nav`
- 临时访问地址：`https://daohang-nav.vercel.app`
- 生产域名：`https://gexinn.com`
- WWW 域名：`https://www.gexinn.com`

当前 Vercel 项目已创建并完成生产部署；`gexinn.com` 和 `www.gexinn.com` 已添加到 Vercel 项目，但 DNS 尚未指向 Vercel，所以正式域名暂时不能访问。

Vercel GitHub 自动部署连接待完成：Vercel CLI 连接 `monaflare-art/daohang-nav` 时返回仓库访问错误。需要在 Vercel GitHub App 设置里允许访问 `daohang-nav` 后，再重新连接 Git 仓库。

## DNS 待办

域名 `gexinn.com` 当前仍使用 DNSPod nameserver，尚未解析到 Vercel。Vercel `domains verify` 当前给出的推荐记录如下：

| 主机记录 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| `@` | `A` | `216.198.79.1` | `gexinn.com` 根域指向 Vercel |
| `@` | `A` | `64.29.17.1` | `gexinn.com` 根域指向 Vercel |
| `www` | `CNAME` | `ad8f0056e39022c6.vercel-dns-017.com.` | `www.gexinn.com` 指向 Vercel |

也可以将域名 nameserver 改成 Vercel 提供的 `ns1.vercel-dns.com` 和 `ns2.vercel-dns.com`。如果继续使用 DNSPod，优先按上表添加记录，然后回到 Vercel Domains 页面重新验证。

## 当前部署状态

- GitHub 仓库已确定为 `monaflare-art/daohang-nav`，当前 `main` 已 push。
- Vercel 生产部署已完成，临时地址为 `https://daohang-nav.vercel.app`。
- Vercel 生产环境变量已配置：`NEXT_PUBLIC_SITE_URL=https://gexinn.com`。
- 自定义域名已添加到 Vercel 项目，但等待域名服务商后台 DNS 解析。
- GitHub 自动部署连接等待 Vercel GitHub App 授权 `daohang-nav` 仓库。
- Plausible、提交邮箱、提交表单尚无真实值，保持未配置。
