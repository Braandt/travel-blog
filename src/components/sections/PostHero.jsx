import { MdLocationOn } from "react-icons/md"

export default function PostHero({ date, location, title, thumbnailUrl }) {

    return (
        <div
            className="pb-4 h-96
            md:h-[calc(100vh_-_3rem)] md:p-8 ">
            <div className="h-full flex flex-col">
                <div
                    className="relative flex-1 bg-cover bg-center"
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                >
                </div>
                <div
                    className="pl-4
                md:pl-0"
                >
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
        </div >
    )
}
