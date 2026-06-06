import { publicEnv } from "@/env/public";
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const baseUrl = publicEnv.SITE_BASE_URL.replace(/\/+$/, "");
	const robots = [
		"User-agent: *", "Allow: /",
		"Disallow: /api/",
		"Disallow: /admin/",
		"",
		`Sitemap: ${baseUrl}/sitemap.xml`,
	].join("\n");
	return new Response(robots, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600"
		},
	});
};
