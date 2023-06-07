import Image from "next/image";
import Link from "next/link";

export default function PhotoCarousel() {

    const gap = 12

    const images = [
        '/images/hero.jpg',
        '/images/javascript-functions-thumbnail.jpeg',
        '/images/python-variables-thumbnail.jpeg',
        '/images/solidjs-thumbnail.jpeg'
    ]

    return (
        <div className="flex h-[60vh] gap-8 overflow-hidden py-24">

            <ImagePortion images={images} />
            <ImagePortion images={images} />

        </div >
    )
}

export function ImagePortion({ images }) {

    return (
        <div
            style={{ animation: 'scroll-x 60s linear infinite' }}
            className='flex shrink-0 h-full gap-8'
        >
            {images.map((img, index) => (
                <Link
                    href='/'
                >
                    <Image
                        key={index}
                        src={img}
                        className="h-full object-contain w-fit shadow-lg rounded-lg"
                        alt=''
                        width={1200}
                        height={1200}
                    />
                </Link>
            ))}
        </div>
    )
}