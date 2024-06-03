import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			precompress: true
		}),
		alias: {
			$components: 'src/lib/components',
			$styles: 'src/styles',
			$types: 'src/types',
			$utils: 'src/lib/utils'
		}
	}
};

export default config;
