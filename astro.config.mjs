import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx({
    drafts: true
  }), react(), svelte(), htmlBeautifier()]
});