import Image from "next/image";
import Link from "next/link";

export default function PhotoCarousel() {

    const gap = 12

    const images = [
        '/images/a-neuquen/hero.jpg',
        '/images/javascript-functions-thumbnail.jpeg',
        '/images/python-variables-thumbnail.jpeg',
        '/images/solidjs-thumbnail.jpeg'
    ]

    return (
        <div className="flex h-[70vh] gap-8 overflow-hidden py-24">

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
            {images.map((img, index) => (
                <Link
                    href='/'
                    key={index}
                >
                    <Image
                        src={img}
                        className="h-full object-contain w-fit shadow-lg"
                        alt=''
                        width={1200}
                        height={1200}
                    />
                </Link>
            ))}
        </div>
    )
}