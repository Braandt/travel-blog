import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostsNav({ posts, id }) {

	const [currentPost, setCurrentPost] = useState(0)

	useEffect(() => {
		setCurrentPost(posts.findIndex(post => post.frontMatter.id === id))
	}, [id])


	const prevPost = posts[currentPost - 1] && posts[currentPost - 1].slug
	const nextPost = posts[currentPost + 1] && posts[currentPost + 1].slug

	return (
		<div className='grid grid-cols-2 w-full py-12'>
			<Link
				href={`/blog/${prevPost}`}
				className='place-self-start prev-clip bg-pallete-2 text-white w-fit px-6 py-1 transition-all
				hover:-translate-x-2 hover:text-amber-500'
			>
				Anterior
			</Link>
			<Link
				href={`/blog/${nextPost}`}
				className='place-self-end next-clip bg-pallete-2 text-white w-fit px-6 py-1 transition-all
				hover:translate-x-2 hover:text-amber-500'
			>
				Próximo
			</Link>
		</div>
	)
}
