import Image from "next/image"
import { useEffect, useState } from "react"
import ImagePresentation from "../postsComponents/ImagePresentation"
import PagesHero from "./PagesHero"

export default function PhotosSection() {

    const [imgPresentation, setImgPresentation] = useState(false)
    const [selectedImg, setSelectedImg] = useState(0)
    const [images, setImages] = useState([])
    const [allImages, setAllImages] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0)
    const [activeLocations, setActiveLocations] = useState([])
    const [imageLocation, setImagesLocation] = useState('')

    useEffect(() => {
        fetch('/images/PhotosPageImages.json')
            .then(res => res.json())
            .then(data => {
                data.map(item => {
                    fetch(item.url)
                        .then(res => res.json())
                        .then(newData => {
                            const imgs = newData.filter(newItem => item.imagesId.includes(newItem.id))
                            setAllImages(imgs)
                            setImages(imgs)
                        }
                        )
                })
            }
            )
    }, [])

    useEffect(() => {
        if (activeLocations.length === 0) {
            setImages(allImages)
        } else {
            setImages(allImages.filter(image => activeLocations.includes(image.location)))
        }
    }, [activeLocations])

    const locations = images.length > 0 && [...new Set(allImages.map(image => image.location))]

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
        <div
            className="mx-4
            md:mx-12"
        >

            <PagesHero header='Imagens' />

            <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
                <h1 className="text-xl">Filtrar imagens: </h1>
                {locations.length > 0 && locations.map(loc => (
                    <button
                        key={loc}
                        className={`py-1 px-4 rounded-full font-sans2 border-[1px] border-amber-500 transition-all shadow-sm
                            hover:shadow-md
                            active:shadow-sm active:scale-95
                            ${activeLocations[0] && activeLocations.includes(loc) && 'bg-amber-500 text-white'}
                            `}
                        onClick={() => locationClickHandler(loc)}
                    >
                        {loc}
                    </button>
                ))}
            </div>

            <div className="my-12">
                <div
                    className='flex flex-wrap items-center transition-all gap-2
                    md:gap-4 md:justify-center'
                >

                    {images.map((image, index) => (
                        <ImageComponent
                            key={image.id}
                            image={image}
                            index={index}
                            imageClickHandle={imageClickHandle}
                        />
                    ))}

                </div>
            </div>

            {imgPresentation && images.length > 0 &&
                <ImagePresentation title={imageLocation} setImgPresentation={setImgPresentation} images={images} selectedImg={selectedImg} scrollPosition={scrollPosition} />
            }

        </div>
    )
}

export function ImageComponent({ image, index, imageClickHandle }) {
    return (
        <Image
            width={500}
            height={500}
            src={image.url}
            alt={image.caption}
            className='flex-1 object-cover cursor-zoom-in rounded-md transition-all
            hover:scale-[102%]
            md:h-80 md:max-h-max md:max-w-fit'
            onClick={() => imageClickHandle(image, index)}
        />
    )
}