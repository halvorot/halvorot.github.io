import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://halvorteigen.no',
  integrations: [icon(), tailwind(), sitemap(
    {
      filter: (page) => page !== 'https://halvorteigen.no/privacy-policy/',
    }
  ), solidJs()]
});