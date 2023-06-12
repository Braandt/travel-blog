import Image from "next/image";

export default function MultImages({ setImgPresentation, images, selectedImages, setSelectedImg, captionDisabled }) {

    const Img = ({ selectedImage }) => {

        const { src, caption } = selectedImage

        return (
            <div className="relative w-full">
                <Image
                    src={src}
                    width={1000}
                    height={1000}
                    className="object-cover h-full object-center cursor-zoom-in"
                    alt={caption}
                    onClick={() => {
                        setImgPresentation(true)
                        setSelectedImg(images.indexOf(selectedImage))
                    }}
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
                <Img key={img.src} selectedImage={img} />
            ))}

        </div>
    )
}