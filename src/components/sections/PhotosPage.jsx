import Image from "next/image"
import { useEffect, useState } from "react"
import ImagePresentation from "../postsComponents/ImagePresentation"
import PagesHero from "./PagesHero"
import Filter from "../Filter"

export default function PhotosPage() {

    const IMAGES_COUNT = 25

    const [imgPresentation, setImgPresentation] = useState(false)
    const [selectedImg, setSelectedImg] = useState(0)
    const [images, setImages] = useState([])
    const [allImages, setAllImages] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0)
    const [imageLocation, setImagesLocation] = useState('')
    const [showMoreCounter, setShowMoreCounter] = useState(1)
    const [limitedImages, setLimitedImages] = useState([])

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

    const imageClickHandle = (image, index) => {
        setImgPresentation(true)
        setSelectedImg(index)
        setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
        setImagesLocation(image.location)
    }

    const locations = images.length > 0 && [...new Set(allImages.map(image => image.location))]

    const showMore = () => {
        setShowMoreCounter(prevState => prevState + 1)
        setLimitedImages(images.slice(0, IMAGES_COUNT + IMAGES_COUNT * showMoreCounter))
    }

    useEffect(() => {
        setShowMoreCounter(1)
        setLimitedImages(images.slice(0, IMAGES_COUNT))
    }, [images])

    return (
        <div
            className="mx-4
            md:mx-12"
        >

            <PagesHero header='Fotos' />

            <Filter label={'Filtrar imagens:'} options={locations} setItems={setImages} allItems={allImages} tags='location' />

            <div className="mt-12">
                <div
                    className='flex flex-wrap items-center transition-all gap-2 mb-12
                    md:gap-4 md:justify-center'
                >

                    {limitedImages.map((image, index) => (
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
                <ImagePresentation title={imageLocation} setImgPresentation={setImgPresentation} images={limitedImages} selectedImg={selectedImg} scrollPosition={scrollPosition} />
            }

            {limitedImages.length !== images.length &&
                <div className="flex justify-center mb-24">
                    <button
                        className="bg-pallete-4 px-4 py-2 rounded-full text-white tracking-widest
                    active:scale-95"
                        onClick={showMore}
                    >
                        Mostrar mais
                    </button>
                </div>
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
            md:h-80 md:max-w-fit'
            onClick={() => imageClickHandle(image, index)}
        />
    )
}