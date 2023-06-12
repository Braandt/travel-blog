import Image from "next/image";

export default function PostThumbnail({ post }) {

    const { title, thumbnailUrl } = post.frontMatter

    return (
        <div className="mx-4">
            < Image
                src={thumbnailUrl}
                width={1000}
                height={1000}
                alt=''
                className='w-full object-contain'
            />
        </div>
    )
}
