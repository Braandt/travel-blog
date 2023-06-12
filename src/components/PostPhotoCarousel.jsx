import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import PassButton from "./PassButton"

export default function PostPhotoCarousel() {

    const GAP = 16

    const ref = useRef()
    const [current, setCurrent] = useState(0)
    const [offset, setOffset] = useState(0)
    const [widthArr, setWidthArr] = useState([])

    const images = [
        '/images/posts/a-neuquen/10.jpg',
        '/images/posts/a-neuquen/11.jpg',
        '/images/posts/a-neuquen/22.jpg',
        '/images/posts/a-neuquen/19.jpg',
        '/images/posts/a-neuquen/20.jpg'
    ]

    useEffect(() => {
        console.log(current, widthArr, offset, ref.current.clientWidth)
    }, [current])

    const nextImage = () => {
        if (current != images.length - 1) {
            setOffset(prevState => prevState + ref.current.clientWidth + GAP)
            setWidthArr(prevState => [ref.current.clientWidth + GAP, ...prevState])
            setCurrent(prevState => prevState + 1)
        } else {
            setOffset(0)
            setCurrent(0)
            setWidthArr([])
        }
    }

    const prevImage = () => {
        setCurrent(prevState => prevState - 1)
        setOffset(prevState => (prevState - widthArr[0]))

        if (current != 1) {
            setWidthArr(prevState => prevState.slice(1, prevState.length))
        } else {
            setWidthArr([])
        }
    }

    return (
        <div className="relative self-center flex justify-end h-[80vh] w-screen py-12">

            <div
                style={{ gap: `${GAP}px`, transform: `translateX(-${offset}px)` }}
                className='flex h-full max-w-7xl gap-4 transition-all'
            >
                {images.map((img, index) => (
                    <Link
                        ref={index == current ? ref : null}
                        href='/'
                        key={index}
                        className={`shrink-0`}
                    >
                        <Image
                            src={img}
                            width={1200}
                            height={1200}
                            alt=''
                            className="h-full w-fit object-contain"
                        />
                    </Link>
                ))}
            </div>

            <PassButton onClick={nextImage} />
            {current != 0 &&
                <PassButton back onClick={prevImage} />
            }
        </div>
    )
}
