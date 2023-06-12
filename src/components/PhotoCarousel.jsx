import Image from "next/image";
import Link from "next/link";

export default function PhotoCarousel() {

    const gap = 12

    const images = [
        '/images/posts/a-neuquen/10.jpg',
        '/images/posts/a-neuquen/11.jpg',
        '/images/posts/a-neuquen/22.jpg',
        '/images/posts/a-neuquen/19.jpg',
        '/images/posts/a-neuquen/20.jpg'
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
                        width={1200}
                        height={1200}
                        className="h-full object-contain w-fit shadow-lg"
                        alt=''
                    />
                </Link>
            ))}
        </div>
    )
}