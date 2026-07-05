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

推荐部署到 Vercel。正式上线前修改 `src/lib/site.ts` 中的站点域名。
