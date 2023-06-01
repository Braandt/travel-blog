import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

export default function Home({ posts, frontMatter }) {

	return (
		<div>

			<Hero posts={posts} />

			{posts.map(post => (
				<Link href={'/blog/' + post.slug} passHref key={post.slug}>
					<h5 className=''>{post.frontMatter.title}</h5>
					<p className=''>{post.frontMatter.description}</p>
					<small className=''>{post.frontMatter.date}</small>
					<Image
						src={post.frontMatter.thumbnailUrl}
						className=''
						alt=''
						width={500}
						height={500}
						style={{ objectFit: 'cover' }}
					/>
				</Link>
			))}
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
		props: { posts }
	}
}