import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const components = {}

const PostPage = ({ frontMatter, mdxSource }) => {
    return (
        <div className='mt-4'>
            <h1>{frontMatter.title}</h1>
            <MDXRemote {...mdxSource} components={components}></MDXRemote>
        </div>
    )
}

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('src', 'posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', ''),
        }
    }))

    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join(
        'src',
        'posts',
        slug + '.mdx'
    ))

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export { getStaticProps, getStaticPaths }
export default PostPage