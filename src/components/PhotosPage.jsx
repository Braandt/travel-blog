// import Masonry from "masonry-layout"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function PhotosPage() {

    const masonryGrid = useRef()

    const [images, setImages] = useState([])
    const [masonryState, setMasonryState] = useState(null)
    const [masonry, setMasonry] = useState(null)

    const fetchImagesData = () => {
        fetch(`/images/PhotosPageImages.json`)
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(setImages([null]))
    }

    useEffect(() => {
        fetchImagesData()

        const Masonry = require('masonry-layout')
        // const grid = document.querySelector('.masonryGrid')

        setTimeout(() => {
            setMasonry(new Masonry(masonryGrid.current, {
                gutter: 10,
                fitWidth: true,
            }))
        }, 1000)

    }, [])

    return (
        <div className="mx-4 my-24">
            <div
                ref={masonryGrid}
                className='masonryGrid mx-auto w-full'>
                {images[0] && images.map(image => (
                    <Image
                        key={image.id}
                        width={300}
                        height={300}
                        src={image.url}
                        alt={image.caption}
                        className='w-fit h-fit masonryItem mb-[10px] rounded-md'
                    />
                ))}
            </div>
        </div>
    )
}
