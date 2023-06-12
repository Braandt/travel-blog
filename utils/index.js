export const sortByDate = (a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
}

export const brasilDataFormat = (posts) => {
    var arr
    arr = posts.map(post => (
        {
            ...post,
            frontMatter: {
                ...post.frontMatter,
                date: new Date(post.frontMatter.date).toLocaleDateString('pt-BR', {
                    dateStyle: 'long'
                })
            }
        }
    ))

    return arr
}

export const nextImage = (setImage, imagesArr, setReverse = () => null) => {
    setReverse(false)
    setImage(prevState => (prevState + 1) % imagesArr.length)
}

export const prevImage = (setImage, imagesArr, setReverse = () => null) => {
    setReverse(true)
    setImage(prevState => (prevState - 1 + imagesArr.length) % imagesArr.length)
}