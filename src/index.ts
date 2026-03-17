import tseslint from 'typescript-eslint';
import js from "@eslint/js";
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.js"],
        plugins: { js },
        extends: ["js/recommended"]
    },
    tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        languageOptions: {
            parser: tseslint.parser,
        },
        rules: {
            "quotes": ["error", "single", {
                "avoidEscape": false,
            }],
            "semi": ["error", "always"],
            "linebreak-style": ["error", "unix"],
            "max-len": ["error", {
                "code": 120,
                "ignoreComments": true,
            }],
            "no-console": ["warn"],
        },
    },
]);
