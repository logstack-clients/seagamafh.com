import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
    {
        ignores: ["dist/**", ".astro/**"],
    },
    ...tseslint.configs.recommended,
    ...astro.configs.recommended,
]);

export default eslintConfig;
