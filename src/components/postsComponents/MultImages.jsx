import Image from "next/image";

export default function MultImages({ setImgPresentation, images, selectedImages, setSelectedImg, captionDisabled, setScrollPosition }) {

    const Img = ({ selectedImage }) => {

        const { url, caption } = images[selectedImage]

        const handleClick = () => {
            setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
            setImgPresentation(true)
            setSelectedImg(selectedImage)
        }

        return (
            <div className="w-full">
                <Image
                    src={url}
                    width={1000}
                    height={1000}
                    className="object-cover h-full object-center cursor-zoom-in"
                    alt={caption}
                    onClick={handleClick}
                />
                {!captionDisabled &&
                    <div>
                        <small className="font-sans2 font-semibold">{caption}</small>
                    </div>
                }
            </div>
        )
    }

    return (
        <div className={`w-[110%] self-center flex gap-4
            ${captionDisabled ? 'mb-12 mt-2' : 'my-12'}`}
        >
            {selectedImages.map(img => (
                <Img key={images[img].url} selectedImage={img} />
            ))}

        </div>
    )
}