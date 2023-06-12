import Image from "next/image";

export default function BigImage({ setImgPresentation, selectedImage, images, setSelectedImg, captionDisabled }) {

    const { src, caption } = selectedImage

    return (
        <div
            className={`w-[110%] self-center 
            ${captionDisabled ? 'mt-12 mb-2' : 'my-12'}`}>

            <Image
                src={src}
                width={1000}
                height={1000}
                className="w-full object-cover object-center cursor-zoom-in"
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
