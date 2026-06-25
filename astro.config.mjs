// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { publicEnv } from "./src/env/public";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: publicEnv.SITE_BASE_URL,
    integrations: [react()],
    build: {
        inlineStylesheets: 'auto',
        assets: 'strict',
    },
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'static',
});
