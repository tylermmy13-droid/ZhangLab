import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://tylermmy13-droid.github.io/ZhangLab',
  output: 'static'
});
