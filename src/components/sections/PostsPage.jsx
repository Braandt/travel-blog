import { useState } from "react";
import Filter from "../Filter";
import PostThumbnail from "../PostThumbnail";
import PagesHero from "./PagesHero";
import { brazilDataFormat } from "../../../utils";

export default function PostsPage({ posts }) {

    const [allPosts, setAllPosts] = useState(brazilDataFormat(posts))
    const [selectedPosts, setSelectedPosts] = useState(allPosts)

    const tags = [...new Set(allPosts.map(post => post.frontMatter.tags).flat(1))]

    return (
        <div
            className="mx-4
            md:mx-12"
        >
            <PagesHero header='Todas as histórias até agora' subheader='' />

            <Filter label='Filtrar posts: ' options={tags} setItems={setSelectedPosts} allItems={allPosts} tags='tags' />

            <div
                className='grid border-r-[1px] border-pallete-2/10 mt-12 mb-24 gap-12
                md:grid-cols-2'
            >
                {selectedPosts.map(post => (

                    <PostThumbnail key={post.frontMatter.id} post={post} />

                ))}
            </div>
        </div>
    )
}
