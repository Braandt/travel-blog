import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { CgScrollH } from 'react-icons/cg'
import PassButton from "../UI/PassButton"
import AnimatedLogo from "../logo/AnimatedLogo"

export default function PostPhotoCarousel({ images, setImgPresentation, setSelectedImg, setScrollPosition }) {

    const GAP = 16

    const ref = useRef(null)
    const [carouselScrollPosition, setCarouselScrollPosition] = useState(0)

    const nextImage = () => {
        if (ref.current.scrollLeft + 2000 > ref.current.scrollWidth) {
            ref.current.scrollLeft = 0
        } else {
            ref.current.scrollLeft += ref.current.clientWidth
        }
    }

    useEffect(() => {
        ref.current.onwheel = (evt) => {
            evt.preventDefault()
            ref.current.scrollLeft += evt.deltaY * 5
        }
    })

    const prevImage = () => {
        ref.current.scrollLeft -= 1000
    }

    const handleClick = (index) => {
        setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
        setImgPresentation(true)
        setSelectedImg(index)
    }

    return (
        <div className="relative self-center justify-end h-[80vh] w-screen my-4 py-12">

            <div
                ref={ref}
                className='flex h-full gap-4 transition-all duration-500 overflow-scroll w-full snap-x scroll-smooth'
            >

                <div
                    className="px-12 animate-pulse self-center
                md:hidden"
                >
                    <CgScrollH className="h-12 w-12 text-pallete-5" />
                </div>
                {images[0] && images.map((img, index) => (

                    <div
                        key={img.id}
                        className={`relative shrink-0 snap-center
                        max-w-[calc(100vw_-_2rem)]
                        md:max-w-[80%]
                        ${index === 0 && 'md:ml-24'}`}
                        onClick={() => handleClick(index)}
                    >
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <AnimatedLogo className='h-24' />
                        </div>

                        <Image
                            src={img.url}
                            width={600}
                            height={600}
                            alt={img.caption}
                            className='h-full w-fit max-w-screen object-contain cursor-zoom-in'
                        />

                    </div>
                ))}
            </div>

            <PassButton className='hidden md:flex' onClick={nextImage} />

            <PassButton className='hidden md:flex' back onClick={prevImage} />

        </div>
    )
}
