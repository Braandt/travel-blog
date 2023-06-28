import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ImagePresentation from "./postsComponents/ImagePresentation"

export default function PhotosPage() {

    const masonryGrid = useRef()

    const [imgPresentation, setImgPresentation] = useState(false)
    const [selectedImg, setSelectedImg] = useState(0)
    const [images, setImages] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0)
    const [activeLocations, setActiveLocations] = useState([])
    const [imageLocation, setImagesLocation] = useState('')

    const fetchImagesData = () => {
        fetch(`/images/PhotosPageImages.json`)
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(setImages([null]))
    }

    useEffect(() => {
        fetch('/images/PhotosPageImages.json')
            .then(res => res.json())
            .then(data => {
                data.map(item => {
                    console.log(item)
                    fetch(item.url)
                        .then(res => res.json())
                        .then(newData => setImages(newData.filter(newItem => item.imagesId.includes(newItem.id))))
                })
            }
            )
    }, [])

    useEffect(() => {

        const Masonry = require('masonry-layout')

        images.length > 1 && setTimeout(() => {
            const masonry = new Masonry(masonryGrid.current, {
                gutter: 10,
                fitWidth: true,
            })
        }, 1000)

    }, [images, activeLocations])

    const locations = images.length > 1 && [...new Set(images.map(image => image.location))]

    const locationClickHandler = (loc) => {
        activeLocations.includes(loc) ?
            setActiveLocations(prevState => prevState.filter(item => item != loc)) :
            setActiveLocations(prevState => [...prevState, loc])
    }

    const imageClickHandle = (image, index) => {
        setImgPresentation(true)
        setSelectedImg(index)
        setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
        setImagesLocation(image.location)
    }
    return (
        <>
            <div className="py-4 items-center">

                <p>Filtrar por localização:</p>

                <div className="flex gap-2 mt-2 text-sm">
                    {locations.length > 0 && locations.map(loc => (
                        <button
                            key={loc}
                            className={`py-1 px-4 rounded-full font-sans2 bg-white border-[1px] border-green-300 transition-all
                            hover:bg-green-50
                            ${activeLocations[0] && activeLocations.includes(loc) && 'bg-green-300'}
                            `}
                            onClick={() => locationClickHandler(loc)}
                        >
                            {loc}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative my-12">
                <div
                    ref={masonryGrid}
                    className='mx-auto'
                >

                    {images.length > 10 && activeLocations[0] && images.map((image, index) => (activeLocations.includes(image.location) && (
                        <ImageComponent image={image} index={index} imageClickHandle={imageClickHandle} />
                    )
                    ))}

                    {images.length > 10 && !activeLocations[0] && images.map((image, index) => (
                        <ImageComponent image={image} index={index} imageClickHandle={imageClickHandle} />
                    ))}

                </div>
            </div>

            {imgPresentation && images.length > 0 &&
                <ImagePresentation title={imageLocation} setImgPresentation={setImgPresentation} images={images} selectedImg={selectedImg} scrollPosition={scrollPosition} />
            }

        </>
    )
}

export function ImageComponent({ image, index, imageClickHandle }) {
    return (
        <Image
            key={image.id}
            width={300}
            height={300}
            src={image.url}
            alt={image.caption}
            className='max-w-fit h-fit mb-[10px] cursor-zoom-in'
            onClick={() => imageClickHandle(image, index)}
        />
    )
}