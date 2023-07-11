import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import PostHero from '@/components/sections/PostHero'
import TitleFlag from '@/components/TitleFlag'
import MultImages from '@/components/postsComponents/MultImages'
import { useEffect, useState } from 'react'
import ImagePresentation from '@/components/postsComponents/ImagePresentation'
import PostPhotoCarousel from '@/components/postsComponents/PostPhotoCarousel'
import RelatedPosts from '@/components/sections/RelatedPosts'
import PostsNav from '@/components/sections/PostsNav'
import PostGreeting from '@/components/sections/PostGreeting'
import Head from 'next/head'
import { mainTitle } from '../../../utils'

const components = {
    h1: (props) => <p className='max-w-4xl w-full self-center font-sans tracking-wide mt-6 text-3xl' {...props}></p>,
    h2: (props) => <p className='max-w-4xl w-full self-center font-sans tracking-wide mt-3 text-2xl' {...props}></p>,
    p: (props) => <p className='max-w-4xl w-full self-center text-justify mb-4' {...props}></p>,
    Indent: (props) => <div className='py-2 pl-4 max-w-4xl mx-auto' {...props}></div>,
    TitleFlag,
    MultImages,
    PostPhotoCarousel
}

const PostPage = ({ frontMatter, slug, mdxSource, posts }) => {

    const { id, title, description, date, location, intro, tags, thumbnailUrl } = frontMatter

    const fomatedDate = new Date(date).toLocaleDateString('pt-br', { dateStyle: 'long' })

    const tagsText = tags.map((t, i) => i != tags.length - 1 ? t + ' / ' : t)

    const [imgPresentation, setImgPresentation] = useState(false)
    const [selectedImg, setSelectedImg] = useState(0)
    const [images, setImages] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0)
    const [carouselScrollPosition, setCarouselScrollPosition] = useState(0)

    const fetchImagesData = () => {

        fetch(`/images/posts/${slug}/images.json`)
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(setImages([null]))
    }

    useEffect(() => {
        fetchImagesData()
    }, [slug])

    const scope = { images, setImgPresentation, setSelectedImg, setScrollPosition, carouselScrollPosition, setCarouselScrollPosition }

    const pageTitle = mainTitle + ' ' + title

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <PostHero date={fomatedDate} title={title} location={location} thumbnailUrl={thumbnailUrl} />

            <div
                className='mb-24 overflow-hidden
                px-3
                md:px-12'
            >

                <div className='mt-4 max-w-5xl mx-auto'>

                    <TitleFlag
                        text={tagsText}
                        className='my-4'
                    />

                    <div className='flex mb-8 gap-4'>
                        <div className='w-2 bg-pallete-2'></div>
                        <p
                            className='font-serif2 font-semibold
                            md:text-xl'
                        >{intro}</p>
                    </div>

                    <div className='font-serif2 tracking-wide leading-relaxed flex flex-col my-4'>
                        {images.length > 0 &&
                            <MDXRemote {...mdxSource} components={components} scope={scope} ></MDXRemote>
                        }
                    </div>

                    <PostGreeting />

                    <PostsNav posts={posts} id={id} />

                    <RelatedPosts posts={posts} frontMatter={frontMatter} />

                </div>

            </div>

            {imgPresentation && images.length > 0 &&
                <ImagePresentation title={title} setImgPresentation={setImgPresentation} images={images} selectedImg={selectedImg} scrollPosition={scrollPosition} />
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