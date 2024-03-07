import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { isBefore } from 'date-fns'

export async function GET(context) {
	const now = new Date()

	return rss({
		title: 'Blog by Vesa Piittinen',
		description: 'A blog mostly dedicated around web development topics.',
		site: context.site,
		items: (await pagesGlobToRssItems(import.meta.glob('./**/*.{md,mdx}')))
			.filter((item) => isBefore(item.pubDate, now))
			.sort((a, b) => +b.pubDate - +a.pubDate),
	})
}
