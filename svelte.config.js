import path from 'path'
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},
    preprocess: {
        style: ({ content, attributes }) => {
            if (attributes.lang !== 'scss') return { code: content };

            // Prepend your variables to every SCSS block
            return {
                code: `@use '$lib/styles/variables' as *;\n${content}`
            };
        },
        
    }
};

export default config;
