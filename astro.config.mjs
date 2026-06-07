// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { publicEnv } from "./src/env/public";

// https://astro.build/config
export default defineConfig({
    site: publicEnv.SITE_BASE_URL,
    integrations: [react()],
    redirects: {
        "www.seagamafh.com/:path*": {
            "status": 308,
            "destination": "https://seagamafh.com/:path*"
        },
        "www.seagam.vercel.app/:path*": {
            "status": 308,
            "destination": "https://seagam.vercel.app/:path*"
        }
    }
});
