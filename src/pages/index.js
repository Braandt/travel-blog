import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import Hero from '@/components/Hero'
import PhotoCarousel from '@/components/PhotoCarousel'
import LastPosts from '@/components/LastPosts'
import { sortByDate } from '../../utils'

export default function Home({ posts, frontMatter }) {

	posts = posts.map(post => (
		{
			...post,
			frontMatter: {
				...post.frontMatter,
				date: new Date(post.frontMatter.date).toLocaleDateString('pt-BR', {
					dateStyle: 'long'
				})
			}
		}
	))

	return (
		<div>

			<Hero posts={posts} />

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