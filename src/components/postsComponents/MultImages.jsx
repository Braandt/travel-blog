import Image from "next/image";

export default function MultImages({
    setImgPresentation,
    images,
    selectedImages,
    setSelectedImg,
    template = selectedImages.map(() => 1),
    captionEnabled,
    setScrollPosition
}) {

    const handleClick = (selectedImg) => {
        setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
        setImgPresentation(true)
        setSelectedImg(selectedImg)
    }

    return (
        <div
            className='grid grid-cols-12 gap-4 items-center mb-12'
        >

            {images[0] && selectedImages.map((image, index) => {

                const { id, url, caption } = images[image]

                return (
                    <div
                        key={id}
                        style={{ gridColumn: `auto / span ${12 / template[index]}` }}
                        className="h-fit"
                    >
                        <Image
                            src={url}
                            width={1000}
                            height={1000}
                            className="mx-auto object-contain max-h-screen object-center cursor-zoom-in"
                            alt={caption}
                            onClick={() => handleClick(image)}
                        />
                        {captionEnabled &&
                            <div>
                                <small className="font-sans2 font-semibold opacity-70">{caption}</small>
                            </div>
                        }
                    </div>
                )
            })}

        </div>
    )
}