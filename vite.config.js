import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';	
export default defineConfig({
	plugins: [sveltekit(), react()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
