// @ts-check
import { defineConfig } from 'astro/config'
//import deno from '@astrojs/deno'
import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import preact from '@astrojs/preact'
import fs from 'node:fs'
import { deflate } from 'pako'
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
