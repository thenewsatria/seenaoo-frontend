import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        image(),
        tailwind()
    ]
});
