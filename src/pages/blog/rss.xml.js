import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get(context) {
	return rss({
		title: 'Blog by Vesa Piittinen',
		description: 'A blog mostly dedicated around web development topics.',
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.{md,mdx}')),
	})
}
