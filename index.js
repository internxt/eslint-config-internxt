module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true
      }
    ],
    "no-console": ["warn"]
  },
};
