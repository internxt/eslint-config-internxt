module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "no-unused-vars": "off", // @typescript-eslint/no-unused-vars in types fix
    "@typescript-eslint/no-unused-vars": "off", // @typescript-eslint/no-unused-vars in types fix
    "@typescript-eslint/no-unused-vars-experimental": "warn", // @typescript-eslint/no-unused-vars in types fix
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
