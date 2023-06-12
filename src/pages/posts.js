import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
import PostThumbnail from '@/components/PostThumbnail'

export default function posts({ posts }) {

    return (
        <>
            <div className='text-center my-24'>

                <div className='text-6xl mb-6'>Todas as histórias até agora</div>
                <div className='font-sans2 mx-auto max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum pariatur assumenda quis dicta sapiente iure doloremque molestias fugiat ex!</div>

            </div>

            <div className='grid grid-cols-3 mx-4 border-r-[1px] border-pallete-2/50'>

                {posts.map(post => (
                    <div className='relative border-l-[1px] border-pallete-2/50'>

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