import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://halvorot.github.io',
  integrations: [tailwind(), sitemap(
    {
      filter: (page) => page !== 'https://halvorot.github.io/privacy-policy/',
    }
  ), solidJs()]
});