import Image from "next/image";
import AnimatedLogo from "../logo/AnimatedLogo";

export default function MultImages({
    setImgPresentation,
    images,
    selectedImages,
    setSelectedImg,
    template = selectedImages.map(() => 1),
    captionDisabled,
    setScrollPosition
}) {

    const handleClick = (selectedImg) => {
        setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
        setImgPresentation(true)
        setSelectedImg(selectedImg)
    }

    return (
        <div
            className='grid gap-4 items-center grid-cols-12 my-12'
        >

            {images[0] && selectedImages.map((image, index) => {

                const { id, url, caption } = images[image]

                return (
                    <div
                        key={id}
                        style={{ gridColumn: `auto/span ${12 / template[index]}` }}
                        className="h-full"
                    >
                        <Image
                            src={url}
                            width={2000}
                            height={2000}
                            className="object-contain max-h-screen object-center cursor-zoom-in"
                            alt={caption}
                            onClick={() => handleClick(image)}
                        />
                        {!captionDisabled &&
                            <div>
                                <small className="font-sans2 font-semibold">{caption}</small>
                            </div>
                        }
                    </div>
                )
            })}

        </div>
    )
}