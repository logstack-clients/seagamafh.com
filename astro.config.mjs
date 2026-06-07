// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { publicEnv } from "./src/env/public";

// https://astro.build/config
export default defineConfig({
    site: publicEnv.SITE_BASE_URL,
    integrations: [react()],
    redirects: {
        "https://www.seagamafh.com/:path*": "https://seagamafh.com/:path*",
        "https://www.seagam.vercel.app/:path*": "https://seagam.vercel.app/:path*"
    }
});
