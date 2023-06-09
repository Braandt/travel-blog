import Image from "next/image";

export default function BigImage({ setImgPresentation, image, images, setSelectedImg }) {

    const { src, caption } = image

    return (
        <div className="w-[110%] self-center my-12">

            <Image
                src={src}
                width={1000}
                height={1000}
                className="w-full object-cover"
                alt={caption}
                onClick={() => {
                    setImgPresentation(true)
                    setSelectedImg(images.indexOf(image))
                }}
            />
            <div>
                <small className="font-sans2 font-semibold">{caption}</small>
            </div>

        </div>
    )
}
