import Image from "next/image";
import Link from "next/link";

export default function PostThumbnail({ post }) {

    const { title, date, location, thumbnailUrl, intro } = post.frontMatter

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group transition-all 
            md:active:scale-95"
        >
            <div>
                <div className="relative">
                    <div className="overflow-clip bg-pallete-2">
                        < Image
                            src={thumbnailUrl}
                            width={1000}
                            height={1000}
                            alt=''
                            className='w-full object-contain  transition-all
                            md:group-hover:scale-95 md:group-hover:shadow-xl'
                        />
                    </div>

                    <div className="absolute inset-0 bg-black  transition-all mix-blend-hue
                    opacity-0
                    md:group-hover:opacity-80"
                    ></div>

                    <div className="absolute inset-0 bg-black transition-all
                    opacity-0
                    md:group-hover:opacity-60"
                    ></div>
                    <div
                        className="absolute p-10 transition-all text-white duration-500 top-20 opacity-0 text-center flex flex-col items-center w-full justify-center h-full
                        md:group-hover:opacity-100 group-hover:top-0"
                    >
                        {/* <p className="text-lg tracking-wider">{title}</p>
                        <div className="flex gap-4 font-sans2">
                            <p>{date}</p>
                            {location && '|'}
                            <p>{location}</p>
                        </div> */}
                        <p className="font-sans2 tracking-wider mt-4 max-w-sm">{intro}<span className="text-amber-500 hover:border-b-[1px]"> ...ler mais</span></p>
                    </div>
                </div>

                <div
                    className="pt-4 transition-all
                    group-hover:text-amber-500"
                >
                    <p className="text-lg tracking-wider">{title}</p>
                    <div className="flex gap-4 font-sans2">
                        <p>{date}</p>
                        {location && '|'}
                        <p>{location}</p>
                    </div>
                    <p
                        className="font-sans2 tracking-wider mt-2 max-w-sm
                        md:hidden"
                    >{intro}<span className="text-amber-500 hover:border-b-[1px]"> ...ler mais</span></p>
                </div>
            </div>
        </Link>
    )
}
