import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		sourcemap: true
	},
	server: {
		port: 3000
	},
	plugins: [sveltekit(),
		Icons({
			compiler: 'svelte',
			customCollections: {
			  custom: FileSystemIconLoader('./static/icons'),
			},
		  }),
	]

};

export default config;
