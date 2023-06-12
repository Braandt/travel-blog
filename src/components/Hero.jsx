import { useEffect, useRef, useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import Link from 'next/link'
import { MdLocationOn } from 'react-icons/md'
import { BsChevronCompactLeft, BsChevronCompactRight, BsPause, BsPlay } from 'react-icons/bs'
import ReadPostButton from './ReadPostButton'

export default function Hero({ posts }) {

    const [post, setPost] = useState(0)
    const [reverse, setReverse] = useState(false)
    const [playCorousel, setPlayCorousel] = useState(true)

    const nextPost = () => {
        setReverse(false)
        setPost(prevState => (prevState + 1) % posts.length)
    }

    const prevPost = () => {
        setReverse(true)
        setPost(prevState => (prevState - 1 + posts.length) % posts.length)
    }

    const handleNext = () => {
        nextPost()
        setPlayCorousel(false)
    }

    const handlePrev = () => {
        prevPost()
        setPlayCorousel(false)
    }

    const transitions = useTransition([post], {
        initial: { transform: 'translateX(0%)' },
        from: { transform: reverse ? 'translateX(-100%)' : 'translateX(100%)' },
        enter: { transform: 'translateX(0%)' },
        leave: { transform: reverse ? 'translateX(75%)' : 'translateX(-75%)' },
    })

    const timeoutRef = useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        setReverse(false)

        if (playCorousel) {
            resetTimeout()
            timeoutRef.current = setTimeout(
                () =>
                    nextPost(),
                5000
            )
        }

        return () => {
            resetTimeout()
        };
    }, [post, playCorousel])

    return (
        <div
            className="relative flex text-white h-screen overflow-clip"
        >

            {transitions((style, item) => {

                const { title, date, location, description, thumbnailUrl, tags } = posts[item].frontMatter

                return (
                    <animated.div
                        className='absolute bg-full flex items-center justify-center w-full h-full text-center bg-center'
                        style={{ ...style, backgroundImage: `url(${thumbnailUrl})` }}
                    >
                        <div className="absolute bg-black w-full h-full opacity-[0.15]"></div>

                        <Link
                            href={`/blog/${posts[item].slug}`}
                            className="absolute flex flex-col items-center group p-24 max-w-screen-lg"
                            onMouseEnter={() => setPlayCorousel(false)}
                            onMouseLeave={() => setPlayCorousel(true)}
                        >

                            <div className="flex text-xl tracking-wider gap-6 drop-shadow-lg">
                                {'blog post'}
                                <div className='flex items-center'>
                                    <MdLocationOn />
                                    {location}
                                </div>
                            </div>

                            <h1 className="text-8xl uppercase mt-2 mb-4 drop-shadow-lg tracking-widest">
                                {title}
                            </h1>

                            <div className="tracking-widest text-lg gap-6 mb-4 drop-shadow-lg">
                                {description}
                            </div>

                            <ReadPostButton />

                        </Link>
                    </animated.div>
                )
            })}


            <button
                className='absolute h-full flex items-center justify-center w-1/12 right-0 group'
                onClick={handleNext}
            >
                <BsChevronCompactRight
                    className='w-12 h-12 opacity-50 transition-all
                group-hover:opacity-100 group-hover:scale-110'
                />
            </button>

            <button
                className='absolute h-full flex items-center justify-center w-1/12 left-0 group'
                onClick={handlePrev}
            >
                <BsChevronCompactLeft
                    className='w-12 h-12 opacity-50 transition-all
                    group-hover:opacity-100 group-hover:scale-110'
                />
            </button>

            <div className='absolute bottom-0 flex items-center justify-center gap-4 w-full h-12 mb-12'>
                {playCorousel ?
                    <BsPause onClick={() => setPlayCorousel(false)} /> :
                    <BsPlay onClick={() => setPlayCorousel(true)} />}
                {posts.map((p, i) => (
                    <div
                        key={i}
                        className={`bg-white aspect-square w-2 rounded-full backdrop-blur-xl transition-all
                        ${i === post ? 'bg-opacity-100 scale-125' : 'bg-opacity-40'}`}
                    ></div>
                ))}
            </div>

        </div >
    )
}
