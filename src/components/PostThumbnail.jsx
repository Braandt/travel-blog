import Image from "next/image";
import Link from "next/link";

export default function PostThumbnail({ post }) {

    const { title, date, location, thumbnailUrl } = post.frontMatter

    return (
        <Link
            href={`/blog/${post.slug}`}
        >
            <div
                className="m-2 rounded-xl group
                hover:bg-[#fff]"
            >
                <div className="group-hover:scale-[95%] transition-all ">
                    < Image
                        src={thumbnailUrl}
                        width={1000}
                        height={1000}
                        alt=''
                        className='w-full object-contain transition-all
                        group-hover:rounded-xl'
                    />
                    <div className="pt-4">
                        <p className="text-lg">{title}</p>
                        <div className="flex gap-4 font-sans2">
                            <p>{date}</p>
                            {location && '|'}
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div >
        </Link>
    )
}
