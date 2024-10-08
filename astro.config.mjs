import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  adapter: vercelStatic({
    imageService: true,
  })
});