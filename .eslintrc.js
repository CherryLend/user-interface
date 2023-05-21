module.exports = {
  // ...other config options
  parser: "@typescript-eslint/parser",

  extends: ["next", "next/core-web-vitals"],

  plugins: ["import", "unused-imports"],

  rules: {
    "import/no-unused-modules": "warn",
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
