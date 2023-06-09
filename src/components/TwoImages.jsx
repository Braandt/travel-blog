import Image from "next/image";

export default function TwoImages({ setImgPresentation, image, images, setSelectedImg }) {

    const Img = ({ image }) => {

        const { src, caption } = image

        return (
            <div>
                <Image
                    src={src}
                    width={1000}
                    height={1000}
                    className="h-full max-h-96 object-cover object-center"
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

    return (
        <div className="w-[110%] self-center my-12 grid grid-cols-2 gap-4">

            <Img image={images[0]} />
            <Img image={images[1]} />

        </div>
    )
}