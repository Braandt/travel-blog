import Image from "next/image"
import TitleFlag from "./TitleFlag"

export default function PostHero({ frontMatter }) {

    const { tags, thumbnailUrl } = frontMatter

    return (
        <div
            className="h-[80vh] bg-full bg-center glow-image mt-12 mx-12"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
            <div className="translate-y-1/2">
            </div>
        </div>
    )
}
