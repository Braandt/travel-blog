import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { mainTitle, sortByDate } from '../../utils'
import Head from 'next/head'
import PostsPage from '@/components/sections/PostsPage'

export default function posts({ posts }) {

    const pageTitle = mainTitle + ' Posts'

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <PostsPage posts={posts} />
        </>
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