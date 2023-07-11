import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import TitleFlag from "../TitleFlag";
import PostThumbnail from "../PostThumbnail";

export default function LastPosts({ posts }) {

    const lastPosts = posts.slice(0, 5)

    return (
        <div
            className="mt-12 mb-32 px-6
            md:px-32"
        >

            <TitleFlag
                text='últimas histórias'
                className='mx-auto text-xl mb-2'
            />

            <div
                className="border-b-[1px] border-pallete-2/50 border-dashed mb-2 
                md:mb-6"
            ></div>

            <div
                className="grid gap-12 pb-12
                md:grid-cols-3">

                {lastPosts.map((post, index) => {

                    return (
                        <PostThumbnail key={post.frontMatter.id} post={post} />
                    )
                })}

            </div>
        </div>
    )
}
