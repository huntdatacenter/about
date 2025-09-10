// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
    ignores: [
      "build/**",
      "pages/.vitepress/cache/**",
      "pages/.vitepress/cache/deps/*.js"
    ],
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
]);
