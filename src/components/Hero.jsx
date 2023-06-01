import { useState } from 'react'
import PostCover from './PostCover'

export default function Hero({ posts }) {

    const [post, setPost] = useState(posts[0])

    const { title, date, location, description, thumbnailUrl, tags } = post.frontMatter

    return <>
        <PostCover category='Blog post' location={location} title={title} subtitle={description} link={'/blog/' + post.slug} imgUrl={thumbnailUrl} />
    </>
}
