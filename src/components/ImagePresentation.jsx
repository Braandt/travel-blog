import { animated, useTransition } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiXMark } from "react-icons/hi";

export default function ImagePresentation({ images, setImgPresentation, selectedImg }) {

    const [image, setImage] = useState(selectedImg)
    const [reverse, setReverse] = useState(false)

    const nextImage = () => {
        setReverse(false)
        setImage(prevState => (prevState + 1) % images.length)
    }

    const prevImage = () => {
        setReverse(true)
        setImage(prevState => (prevState - 1 + images.length) % images.length)
    }

    const transitions = useTransition([image], {
        initial: { transform: 'translateX(0%)' },
        from: { transform: reverse ? 'translateX(-100%)' : 'translateX(100%)' },
        enter: { transform: 'translateX(0%)' },
        leave: { transform: reverse ? 'translateX(100%)' : 'translateX(-100%)' },
    })


    const PassButtom = ({ back }) => {

        const style = back ? 'left-0' : 'right-0'

        return (
            <Button
                className={`mx-10 absolute top-1/2 -translate-y-1/2 ${style}`}
                onClick={() => back ? prevImage() : nextImage()}
            >
                {back ?
                    <FaChevronLeft className='w-4 h-4' /> :
                    <FaChevronRight className='w-4 h-4' />
                }
            </Button>
        )
    }

    const ExitButton = () => (
        <Button
            className='absolute top-0 right-0'
            onClick={() => setImgPresentation(false)}
        >
            <FaChevronLeft className="absolute translate-x-[3px]" />
            <FaChevronRight className="absolute -translate-x-[3px]" />
        </Button>
    )

    return (
        <div className='fixed z-50 inset-0 bg-black'>
            <div className="relative h-full w-full">

                {transitions((style, item) => {

                    const { src, caption } = images[item]

                    return (
                        <animated.div
                            className='absolute inset-0'
                            style={style}
                        >
                            <Image
                                src={src}
                                fill
                                alt={caption}
                                className='h-full w-fit max-w-full mx-auto object-contain'
                            />
                        </animated.div>
                    )

                })}

                <PassButtom />
                <PassButtom back />

                <ExitButton />

            </div>
        </div >
    )
}

export function Button({ children, className, onClick }) {
    return (
        <button
            className={`flex items-center justify-center bg-black outline outline-1 outline-white/50 w-10 aspect-square rounded-full backdrop-blur-2xl bg-opacity-20 text-white transition-all
            hover:bg-white/10
            ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}