import Image from "next/image"
import { useRef, useState } from "react"
import PassButton from "../UI/PassButton"
import AnimatedLogo from "../logo/AnimatedLogo"

export default function PostPhotoCarousel({ images, setImgPresentation, setSelectedImg, setScrollPosition }) {

    const GAP = 16

    const ref = useRef()
    const [current, setCurrent] = useState(0)
    const [offset, setOffset] = useState(0)
    const [widthArr, setWidthArr] = useState([0])

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

    const handleClick = (index) => {
        setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
        setImgPresentation(true)
        setSelectedImg(index)
    }

    return (
        <div className="relative self-center flex justify-end h-[80vh] w-screen my-4 py-12 pl-4">

            <div
                style={{ gap: `${GAP}px`, transform: `translateX(-${offset}px)` }}
                className='flex h-full gap-4 transition-all duration-500
                w-full
                md:w-[80%]'
            >
                {images[0] && images.map((img, index) => (

                    <div
                        ref={index == current ? ref : null}
                        key={img.id}
                        className='relative shrink-0 
                        max-w-[calc(100vw_-_2rem)]
                        md:max-w-[80%]'
                        onClick={() => handleClick(index)}
                    >
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <AnimatedLogo className='h-24' />
                        </div>

                        <Image
                            src={img.url}
                            width={1200}
                            height={1200}
                            alt={img.caption}
                            className='h-full w-fit max-w-screen object-contain cursor-zoom-in rounded-xl'
                        />

                        <div
                            className={`absolute w-full h-full top-0 left-0 bg-black rounded-xl transition-all mix-blend-hue duration-500
                            hidden
                            md:block
                            ${index == current ? 'bg-opacity-0' : 'bg-opacity-100'}`}
                        ></div>

                    </div>
                ))}
            </div>

            <PassButton onClick={nextImage} />
            {current != 0 &&
                <PassButton back onClick={prevImage} />
            }
        </div>
    )
}
