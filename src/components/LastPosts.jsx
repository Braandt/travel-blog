import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import TitleFlag from "./TitleFlag";

export default function LastPosts({ posts }) {

    const lastPosts = posts.slice(0, 4)

    return (
        <div className="relative mt-12 mb-32">

            <TitleFlag text='últimas histórias' />

            <div className="py-8 flex justify-center w-full">
                <p className="text-center font-sans2 max-w-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius accusamus aliquam laudantium, esse ea laboriosam? Maiores nesciunt tempora ratione. Cupiditate.
                </p>
            </div>

            <div className="grid grid-cols-4 px-32 pb-12">
                {lastPosts.map((post, index) => {

                    const { title, description, date, location, thumbnailUrl } = post.frontMatter

                    return (
                        <Link
                            href={'/blog/' + post.slug}
                            passHref
                            key={index}
                            className="relative group"
                        >
                            <div className="relative overflow-clip">
                                <div className="absolute bg-black inset-0 opacity-40 z-10"></div>
                                <Image
                                    src={thumbnailUrl}
                                    className='object-cover w-full aspect-square origin-center transition-all duration-500
                                group-hover:scale-110'
                                    alt=''
                                    width={500}
                                    height={500}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div className="flex flex-col absolute justify-end items-center pb-12 inset-0 text-white z-20 drop-shadow-lg">
                                <h5 className=''>{title}</h5>
                                <p className='font-sans2'>{description}</p>
                                <div className="flex justify-between font-sans2">
                                    <small>{date}</small>
                                    <div className="flex items-center">
                                        <MdLocationOn />
                                        <small>{location}</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
