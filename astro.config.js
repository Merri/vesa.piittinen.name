// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	integrations: [
		preact(),
		mdx(),
		sitemap({
			filter: (page) => !page.includes('rss.xml'),
		}),
	],
	output: 'static',
	site: 'https://vesa.piittinen.name',
})
