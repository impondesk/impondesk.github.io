import { defineConfig } from 'astro/config';

// import remarkToc from 'https://esm.sh/remark-toc@8'

// import {read} from 'to-vfile'
// import {remark} from 'remark'
// import remarkToc from 'remark-toc'

// import astroRemark from '@astrojs/markdown-remark';


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
import preact from "@astrojs/preact";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  // devOptions: {
  //   tailwindConfig: './tailwind.config.js',
  // },
  markdown: {
    drafts: true
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
      path: './tailwind.config.cjs'
    }
  }), mdx({
    drafts: true,
    // syntaxHighlight: 'shiki',
    // shikiConfig: { theme: 'dracula' },
    // remarkPlugins: [remarkToc],
    // rehypePlugins: [rehypeMinifyHtml],
    // remarkRehype: { footnoteLabel: 'Footnotes' },
    gfm: false,
  }), react(), svelte(), htmlBeautifier(), preact(), image(), prefetch()]
});