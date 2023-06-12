import { MdLocationOn } from "react-icons/md"

export default function PostHero({ date, location, title, thumbnailUrl }) {

    return (
        <div className="h-[calc(100vh_-_3rem)] p-8 pb-4">
            <div className="h-full flex flex-col">
                <div
                    className="flex-1 bg-full bg-center glow-image"
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                >
                </div>
                <h1 className='my-2 text-5xl'>{title}</h1>
                <div className='flex gap-4'>
                    <div>
                        {date}
                    </div>
                    <div className='flex items-center'>
                        <MdLocationOn className='text-pallete-4' />
                        {location}
                    </div>
                </div>
            </div>
        </div>
    )
}
