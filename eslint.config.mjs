import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
    {
        ignores: ["dist/**", ".astro/**"],
    },
    ...tseslint.configs.recommended,
]);

export default eslintConfig;
