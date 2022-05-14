import {resolve} from 'path'
import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

const SRC_DIR = resolve('./src');
const PUBLIC_DIR = resolve('./public');
const BUILD_DIR = resolve('./dist');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	root: SRC_DIR,
	base: '',
	publicDir: PUBLIC_DIR,
	build: {
		outDir: BUILD_DIR,
		assetsInlineLimit: 0,
		emptyOutDir: true,
		rollupOptions: {
			treeshake: false,
		},
	},
	resolve: {
		alias: {
			'@': SRC_DIR,
		},
	},
	server: {
		host: true,
	},
})
