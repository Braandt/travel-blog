// import Masonry from "masonry-layout"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function PhotosPage() {

    const [images, setImages] = useState([])

    const fetchImagesData = () => {
        fetch(`/images/PhotosPageImages.json`)
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(setImages([null]))
    }


    useEffect(() => {
        fetchImagesData()

        window.onload = () => {
            const Masonry = require('masonry-layout')
            const grid = document.querySelector('.masonryGrid')
            console.log(Masonry)
            const masonry = new Masonry(grid, {
                gutter: 10,
                fitWidth: true,
            })
        }

    }, [])

    return (
        <div className="mx-4 my-24">

            <div className='masonryGrid mx-auto w-full'>
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
