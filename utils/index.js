import CircleType from "circletype"

export const sortByDate = (a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
}

export const brazilDataFormat = (posts) => {
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

export const copyToClipboard = async (text, alertText) => {
    try {
        await navigator.clipboard.writeText(text)
        alert(alertText)
    } catch (err) {
        console.error('Failed to copy: ', err)
    }
}

export var mainTitle = 'PedalaLeo 🚲'

export const arcText = (element, angle, dir = 1) => {
    new CircleType(element)
        .dir(dir)
        .radius(angle);
}