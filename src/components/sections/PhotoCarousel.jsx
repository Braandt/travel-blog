import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PhotoCarousel() {

    const [images, setImages] = useState([])

    const fetchImages = () => {
        fetch('/images/carouselPhotos.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }

    useEffect(() => fetchImages(), [])

    return (
        <div className="flex gap-8 overflow-hidden py-24
        h-[50vh]
        md:h-[70vh]"
        >
            <ImagePortion images={images} />
            <ImagePortion images={images} />

        </div >
    )
}

export function ImagePortion({ images }) {

    return (
        <div
            style={{ animation: 'scroll-x 60s linear infinite' }}
            className='flex shrink-0 h-full gap-12'
        >
            {images.length > 0 && images.map(img => (
                <Link
                    key={img.id}
                    href='/photos'
                >
                    <Image
                        src={img.url}
                        width={1200}
                        height={1200}
                        className="h-full object-contain w-fit shadow-xl"
                        alt={img.alt}
                    />
                </Link>
            ))}
        </div>
    )
}