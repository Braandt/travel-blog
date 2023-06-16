import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { brasilDataFormat, sortByDate } from '../../utils'
import PostThumbnail from '@/components/PostThumbnail'
import PagesHero from '@/components/sections/PagesHero'

export default function posts({ posts }) {

    posts = brasilDataFormat(posts)

    return (
        <>
            <PagesHero header='Todas as histórias até agora' subheader='disoa idjosa jdiosajido jsaiodj isoajdi sjao dja' />

            <div className='grid grid-cols-3 mx-4 border-r-[1px] border-pallete-2/10 my-32 gap-y-12'>

                {posts.map(post => (
                    <div
                        key={post.frontMatter.id}
                        className='relative border-l-[1px] border-pallete-2/10'
                    >

                        <PostThumbnail key={post.frontMatter.id} post={post} />

                    </div>
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