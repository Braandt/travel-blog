import RelatedPost from "./RelatedPost";

export default function RelatedPosts({ posts, frontMatter }) {

    const { id, tags } = frontMatter

    let relatedPosts = []

    posts.filter(item => item.frontMatter.id != id).forEach(post => {
        post.frontMatter.tags.some(tag => tags.includes(tag)) && relatedPosts.push(post)
    })

    return (
        <div className="my-12 w-full">
            <p className='mb-2'>Conteúdo relacionado</p>

            <div
                className='grid grid-cols-2 gap-4
            md:grid-cols-4'
            >
                {relatedPosts.map(post => (

                    <RelatedPost
                        key={post.frontMatter.id}
                        post={post}
                    />

                )).slice(0, 4)}
            </div>
        </div>
    )
}
