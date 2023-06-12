import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import PostHero from '@/components/PostHero'
import TitleFlag from '@/components/TitleFlag'
import BigImage from '@/components/BigImage'
import MultImages from '@/components/MultImages'
import { useEffect, useState } from 'react'
import ImagePresentation from '@/components/ImagePresentation'
import RelatedPost from '@/components/RelatedPost'
import PostPhotoCarousel from '@/components/PostPhotoCarousel'

const components = {
    h1: (props) => <p className='font-sans tracking-wide text-3xl' {...props}></p>,
    p: (props) => <p className='text-justify' {...props}></p>,
    TitleFlag,
    BigImage,
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

    let relatedPosts = []

    posts.filter(item => item.frontMatter.id != id).forEach(post => {
        post.frontMatter.tags.some(tag => tags.includes(tag)) && relatedPosts.push(post)
    })

    const fetchImagesData = () => {

        fetch(`/images/posts/${slug}/images.json`)
            .then(res => res.json())
            .then(data => setImages(data))
    }

    useEffect(() => {
        fetchImagesData()
    }, [slug])

    const scope = { images, imgPresentation, setImgPresentation, setSelectedImg }

    return (
        <>
            <PostHero date={fomatedDate} title={title} location={location} thumbnailUrl={thumbnailUrl} />

            <div className='px-12 mb-24 overflow-hidden'>

                <div className='mt-4 max-w-5xl mx-auto'>

                    <TitleFlag
                        text={tagsText}
                        className='my-4'
                    />

                    <div className='flex mb-8 gap-4'>
                        <div className='w-2 bg-pallete-2'></div>
                        <p className='font-serif2 text-xl font-semibold'>{intro}</p>
                    </div>

                    <div className='max-w-4xl mx-auto font-serif2 tracking-wide leading-relaxed flex flex-col'>
                        {images.length > 0 &&
                            <MDXRemote {...mdxSource} components={components} scope={scope} ></MDXRemote>
                        }
                    </div>

                    <div className='mt-12'>
                        <p className='mb-2'>Conteúdo relacionado</p>

                        <div className='grid grid-cols-4 gap-4'>
                            {relatedPosts.map(post => (

                                <RelatedPost
                                    key={post.frontMatter.id}
                                    post={post}
                                />

                            )).slice(0, 4)}
                        </div>

                    </div>
                </div>

            </div>

            {imgPresentation &&
                <ImagePresentation title={title} setImgPresentation={setImgPresentation} images={images} selectedImg={selectedImg} />
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