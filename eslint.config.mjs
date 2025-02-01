import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next", "next/core-web-vitals", "plugin:lingui/recommended"],
    ignorePatterns: ["src/locales"],
    rules: {
      "no-console": "warn",
    },
    settings: {
      next: {
        rootDir: ".",
      },
    },
  }),
];

export default eslintConfig;
