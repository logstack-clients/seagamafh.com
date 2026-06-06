import type { APIRoute } from "astro";
import { publicEnv } from "@/env/public";

export const GET: APIRoute = async () => {
    const pages = [
        { path: "", priority: 1.0, changefreq: "weekly" },
        { path: "/careers", priority: 0.8, changefreq: "monthly" },
        { path: "/faq", priority: 0.7, changefreq: "monthly" },
        { path: "/privacy", priority: 0.3, changefreq: "yearly" },
        { path: "/terms", priority: 0.3, changefreq: "yearly" },
    ] as const;
    const baseUrl = publicEnv.SITE_BASE_URL.replace(/\/$/, "");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(page => `
        <url>
            <loc>${baseUrl}/${page.path}</loc>
            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority.toFixed(1)}</priority>
        </url>`).join("")}
    </urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
