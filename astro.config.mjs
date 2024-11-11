// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import mailObfuscation from 'astro-mail-obfuscation';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react(), mdx(), tailwind(), mailObfuscation()],
});