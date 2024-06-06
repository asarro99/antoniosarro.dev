import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `  
				@use 'sass:list';
                @use '$styles/mixins' as *;
            `
			}
		}
	}
});
