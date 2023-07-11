import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { brazilDataFormat, mainTitle, sortByDate } from '../../utils'
import PostThumbnail from '@/components/PostThumbnail'
import PagesHero from '@/components/sections/PagesHero'
import Head from 'next/head'

export default function posts({ posts }) {

    posts = brazilDataFormat(posts)

    const pageTitle = mainTitle + ' Posts'

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <PagesHero header='Todas as histórias até agora' subheader='' />

            <div
                className='grid border-r-[1px] border-pallete-2/10 my-32 gap-24 mx-8
                md:grid-cols-2'
            >

                {posts.map(post => (

                    <PostThumbnail key={post.frontMatter.id} post={post} />

                ))}

            </div>
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