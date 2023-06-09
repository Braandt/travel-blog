import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import PostHero from '@/components/PostHero'
import TitleFlag from '@/components/TitleFlag'
import BigImage from '@/components/BigImage'
import TwoImages from '@/components/TwoImages'
import { useState } from 'react'
import ImagePresentation from '@/components/ImagePresentation'

const components = {
    h1: (props) => <p className='font-sans tracking-wide text-3xl' {...props}></p>,
    p: (props) => <p className='text-justify' {...props}></p>,
    TitleFlag,
    BigImage,
    TwoImages
}

const PostPage = ({ frontMatter, mdxSource, posts }) => {

    const { title, description, date, location, intro, tags, thumbnailUrl } = frontMatter

    const tagsText = tags.map((t, i) => i != tags.length - 1 ? t + ' / ' : t)

    const [imgPresentation, setImgPresentation] = useState(false)
    const [selectedImg, setSelectedImg] = useState(0)

    const images = [
        { src: '/images/a-neuquen/1.jpg', caption: 'Ponte Anita Garibaldi' },
        { src: '/images/a-neuquen/2.jpg', caption: 'Melhor por do sol uruguaio' },
        { src: '/images/a-neuquen/3.jpg', caption: 'Hora de dar tchau e partir' },
        { src: '/images/a-neuquen/4.jpg', caption: 'Hora de dar tchau e partir' },
    ]

    return (
        <>
            <PostHero frontMatter={frontMatter} />

            <div className='mx-12 mb-24'>

                <h1 className='my-2 text-5xl'>{title}</h1>

                <div className='mt-4 max-w-5xl mx-auto'>

                    <div className='flex mb-8 gap-4'>
                        <div className='w-2 bg-pallete-2'></div>
                        <p className='font-serif2 text-xl font-semibold'>{intro}</p>
                    </div>

                    <TitleFlag
                        text={tagsText}
                        className='my-4'
                    />

                    <div className='max-w-4xl mx-auto font-serif2 tracking-wide flex flex-col'>
                        <MDXRemote {...mdxSource} components={components} scope={{ images, imgPresentation, setImgPresentation, setSelectedImg }} ></MDXRemote>
                    </div>

                    <div className='mt-12'>
                        <p>Conteúdo relacionado</p>
                        <div className='grid grid-cols-4'>

                        </div>
                    </div>
                </div>

            </div>

            {imgPresentation &&
                <ImagePresentation setImgPresentation={setImgPresentation} images={images} selectedImg={selectedImg} />
            }
        </>
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

    const files = fs.readdirSync(path.join('src', 'posts'))

    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename))
        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            frontMatter,
            slug: filename.split('.')[0]
        }
    })

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
            mdxSource,
            posts
        },
    }
}

export { getStaticProps, getStaticPaths }
export default PostPage