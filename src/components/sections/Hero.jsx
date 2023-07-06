import { useEffect, useRef, useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import Link from 'next/link'
import { MdLocationOn } from 'react-icons/md'
import { BsChevronCompactLeft, BsChevronCompactRight, BsPause, BsPlay } from 'react-icons/bs'
import { nextImage, prevImage } from '../../../utils'
import TitleFlag from '@/components/TitleFlag'

export default function Hero({ posts }) {

    const [post, setPost] = useState(0)
    const [reverse, setReverse] = useState(false)
    const [playCorousel, setPlayCorousel] = useState(true)

    const handleNext = () => {
        nextImage(setPost, posts, setReverse)
        setPlayCorousel(false)
    }

    const handlePrev = () => {
        prevImage(setPost, posts, setReverse)
        setPlayCorousel(false)
    }

    const transitions = useTransition([post], {
        initial: { transform: 'translateX(0%)' },
        from: { transform: reverse ? 'translateX(-100%)' : 'translateX(100%)', opacity: 0 },
        enter: { transform: 'translateX(0%)', opacity: 1 },
        leave: { transform: reverse ? 'translateX(50%)' : 'translateX(-50%)', opacity: 0 },
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
                    nextImage(setPost, posts, setReverse),
                5000
            )
        }

        return () => {
            resetTimeout()
        }
    }, [post, playCorousel])

    return (
        <div
            className="relative flex overflow-clip text-white bg-pallete-2 border-pallete-2
            border-[12px] h-[calc(100vh_-_100px)]
            md:h-screen md:border-none"
        >

            {transitions((style, item) => {

                const { title, date, location, description, thumbnailUrl, tags } = posts[item].frontMatter

                return (
                    <animated.div
                        className='absolute w-full
                        h-full'
                        style={style}
                    >
                        <div
                            className='h-full items-center justify-center text-center
                            md:flex'
                        >
                            <div
                                className='bg-cover bg-center
                                w-full h-[40vh] rounded-xl
                                md:absolute md:inset-0 md:h-full md:rounded-none'
                                style={{ backgroundImage: `url(${thumbnailUrl})` }}
                            ></div>

                            <div className="bg-black inset-0 mix-blend-overlay opacity-50
                            hidden
                            md:block md:absolute"
                            ></div>

                            <Link
                                href={`/blog/${posts[item].slug}`}
                                className="flex flex-col items-center justify-center group text-amber-400 max-w-screen-lg flex-1 h-1/2
                                md:absolute md:w-4/6 md:h-fit"
                                onMouseEnter={() => setPlayCorousel(false)}
                                onMouseLeave={() => setPlayCorousel(true)}
                            >

                                <div
                                    className="flex tracking-wider gap-6 drop-shadow-[2px_2px_0_rgb(0,0,0)]
                                    md:text-xl"
                                >
                                    {'blog post'}
                                    <div className='flex items-center'>
                                        <MdLocationOn />
                                        {location}
                                    </div>
                                </div>

                                <h1
                                    className="uppercase mt-2 mb-4  tracking-widest
                                    text-3xl drop-shadow-[2px_2px_0_rgb(0,0,0)]
                                    md:text-8xl md:drop-shadow-[4px_4px_0_rgb(0,0,0)]"
                                >
                                    {title}
                                </h1>

                                <div
                                    className="tracking-widest gap-6 mb-4 drop-shadow-[2px_2px_0_rgb(0,0,0)]
                                    md:text-lg"
                                >
                                    {description}
                                </div>

                                <TitleFlag
                                    text='Ler Post'
                                    className='!text-black !bg-amber-50 mix-blend-screen transition-all
                                    group-hover:!bg-amber-400 group-hover:mix-blend-normal
                                    md:text-xl md:!px-12'
                                />

                            </Link>
                        </div>
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

            <div
                className='hidden absolute bottom-0 items-center justify-center gap-4 w-full
                md:flex md:mb-12 md:h-12 md:text-white'
            >
                {playCorousel ?
                    <BsPause onClick={() => setPlayCorousel(false)} /> :
                    <BsPlay onClick={() => setPlayCorousel(true)} />}
                {posts.map((p, i) => (
                    <div
                        key={i}
                        className={`aspect-square w-2 rounded-full backdrop-blur-xl transition-all
                        bg-pallete-2
                        md:bg-white
                        ${i === post ? 'bg-opacity-100 scale-125' : 'bg-opacity-40'}`}
                    ></div>
                ))}
            </div>

        </div >
    )
}
