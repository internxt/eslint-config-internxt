import tseslint from 'typescript-eslint';
import js from "@eslint/js";
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
    js.configs.recommended,
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
);
