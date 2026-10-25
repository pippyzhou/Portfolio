import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 部署时改成你的正式域名（用于生成正确的绝对链接 / sitemap）
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      // 中文（默认语言）不加前缀：/、/experience …
      // 英文加前缀：/en/、/en/experience …
      prefixDefaultLocale: false,
    },
  },
});
