import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig({
  root: true,
  plugins: {
    next: nextPlugin.default || nextPlugin,
  },
  extends: ["plugin:next/recommended", "plugin:next/core-web-vitals"],
  ignorePatterns: [".next/**", "out/**", "build/**", "next-env.d.ts"],
});
