import { MdLocationOn } from 'react-icons/md'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import ReadPostButton from './ReadPostButton'
import Link from 'next/link'
import Image from 'next/image'

export default function PostCover({ category, location, title, subtitle, link, imgUrl }) {
    return (
        <div
            className="relative bg-full flex items-center justify-center w-full h-screen text-white"
            style={{ background: `url(${imgUrl})` }}
        >

            <div className="absolute bg-black w-full h-full opacity-[0.15]"></div>

            <Link
                href={link}
                className="absolute flex flex-col items-center group p-24"
            >

                <div className="flex text-xl tracking-wider gap-6 drop-shadow-lg">
                    {category}
                    <div className='flex items-center'>
                        <MdLocationOn />
                        {location}
                    </div>
                </div>

                <h1 className="text-8xl uppercase mt-2 mb-4 drop-shadow-lg tracking-widest">
                    {title}
                </h1>

                <div className="tracking-widest text-lg gap-6 mb-4 drop-shadow-lg">
                    {subtitle}
                </div>

                <ReadPostButton />

            </Link>

            <div className='absolute h-full flex items-center justify-center w-1/12 right-0'>
                <BsChevronCompactRight className='w-12 h-12 opacity-50' />
            </div>

            <div className='absolute h-full flex items-center justify-center w-1/12 left-0'>
                <BsChevronCompactLeft className='w-12 h-12 opacity-50' />
            </div>

        </div >
    )
}
