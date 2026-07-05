import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f7fb",
          color: "#0f172a",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 86,
              height: 86,
              borderRadius: 18,
              background: "#116b5f",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 900,
            }}
          >
            方
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 54, fontWeight: 900 }}>{siteConfig.name}</div>
            <div style={{ marginTop: 10, fontSize: 26, color: "#475569" }}>清晰、合法、可维护的资源入口</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: -1 }}>中文综合资源导航</div>
          <div style={{ maxWidth: 900, fontSize: 30, lineHeight: 1.45, color: "#334155" }}>
            AI 工具、在线工具、开发资源、设计素材、学习办公和生活服务的高密度入口。
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24, fontWeight: 800 }}>
          {["推荐网址", "分类资源", "排行榜", "文章资讯", "收录提交"].map((item) => (
            <div key={item} style={{ borderRadius: 12, background: "#fff", border: "1px solid #dbe3ea", padding: "12px 18px" }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
