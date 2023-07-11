import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import Hero from '@/components/sections/Hero'
import PhotoCarousel from '@/components/sections/PhotoCarousel'
import LastPosts from '@/components/sections/LastPosts'
import { sortByDate, brazilDataFormat } from '../../utils'
import Welcome from '@/components/sections/Welcome'

export default function Home({ posts }) {

	posts = brazilDataFormat(posts)

	return (
		<div>

			<Hero posts={posts} />

			<Welcome />

			<PhotoCarousel />

			<LastPosts posts={posts} />

		</div>
	)
}

export const getStaticProps = async () => {

	const files = fs.readdirSync(path.join('src', 'posts'))

	const posts = files.map(filename => {
		const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename))
		const { data: frontMatter } = matter(markdownWithMeta)

		return {
			frontMatter,
			slug: filename.split('.')[0]
		}
	})

	return {
		props: {
			posts: posts.sort(sortByDate)
		}
	}
}