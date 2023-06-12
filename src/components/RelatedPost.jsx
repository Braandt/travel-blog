import Image from "next/image"
import Link from "next/link"

export default function RelatedPost({ post }) {

    const { title, description, date, location, intro, tags, thumbnailUrl } = post.frontMatter

    return (
        <Link
            className="aspect-square border-2 border-pallete-2/5 p-2 transition-all rounded-md group
            hover:bg-[#fff]"
            href={`/blog/${post.slug}`}
        >
            <div className="relative h-full">
                <Image
                    src={thumbnailUrl}
                    width={500}
                    height={500}
                    className="object-cover h-full w-full rounded-lg group-hover:rounded-none transition-all"
                    alt=""
                />
            </div>

            <div className="mt-2">
                <p className="">{title}</p>
                <p className="font-sans2">{description}</p>
            </div>
        </Link>
    )
}
