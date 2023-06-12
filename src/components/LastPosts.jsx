import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import TitleFlag from "./TitleFlag";

export default function LastPosts({ posts }) {

    const lastPosts = posts.slice(0, 5)

    return (
        <div className="mt-12 mb-32">

            <TitleFlag
                text='últimas histórias'
                className='mx-auto text-xl'
            />

            <div className="mt-4 mb-12 flex justify-center w-full">
                <p className="text-center font-sans2 max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius accusamus aliquam laudantium, esse ea laboriosam? Maiores nesciunt tempora ratione. Cupiditate.
                </p>
            </div>

            <div className="grid grid-cols-5 gap-8 px-32 pb-12">
                {lastPosts.map((post, index) => {

                    const { title, description, date, location, thumbnailUrl } = post.frontMatter

                    return (
                        <Link
                            href={'/blog/' + post.slug}
                            passHref
                            key={index}
                            className="group"
                        >
                            <small className="tracking-wide opacity-70">{date}</small>
                            <Image
                                src={thumbnailUrl}
                                className='object-cover my-2 w-full aspect-square origin-center transition-all duration-200
                                group-hover:scale-[102%]'
                                alt=''
                                width={500}
                                height={500}
                                style={{ objectFit: 'cover' }}
                            />


                            <h5 className=''>{title}</h5>

                            <div className="flex items-center font-sans2">

                                {location && <MdLocationOn />}
                                <div>{location}</div>

                            </div>


                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
