import Image from "next/image"
import { useEffect, useRef } from "react"
import PassButton from "../UI/PassButton"
import AnimatedLogo from "../logo/AnimatedLogo"

export default function PostPhotoCarousel({
    images,
    setImgPresentation,
    setSelectedImg,
    setScrollPosition,
    carouselScrollPosition,
    setCarouselScrollPosition
}) {

    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollLeft = carouselScrollPosition
        ref.current.onwheel = (evt) => {
            evt.preventDefault()
            ref.current.scrollLeft += evt.deltaY
        }
    }, [])

    const nextImage = () => {
        if (ref.current.scrollLeft + ref.current.offsetWidth === ref.current.scrollWidth) {
            ref.current.scrollLeft = 0
        } else {
            ref.current.scrollLeft += ref.current.clientWidth
        }
    }

    const prevImage = () => {
        if (ref.current.scrollLeft === 0) {
            ref.current.scrollLeft = ref.current.scrollWidth
        } else {
            ref.current.scrollLeft -= ref.current.clientWidth
        }
    }

    const handleClick = (index) => {
        setCarouselScrollPosition(ref.current.scrollLeft)
        setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
        setImgPresentation(true)
        setSelectedImg(index)
    }

    return (
        <div className="relative self-center justify-end h-[80vh] w-screen my-4 py-12">

            <div
                ref={ref}
                className='flex h-full gap-4 transition-all duration-500 overflow-scroll w-full snap-x snap-mandatory
                md:snap-none'
            >

                {images[0] && images.map((img, index) => (

                    <div
                        key={img.id}
                        className={`relative shrink-0 snap-center snap-always
                        max-w-[calc(100vw_-_2rem)]
                        md:max-w-[80%]
                        ${index === 0 && 'md:pl-24'}
                        ${index === images.length - 1 && 'md:pr-24'}`}
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
