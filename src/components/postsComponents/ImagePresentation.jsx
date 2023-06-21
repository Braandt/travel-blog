import { animated, useTransition } from "@react-spring/web"
import Image from "next/image"
import { useState } from "react"
import PassButton from "../UI/PassButton"
import ExitButton from "../UI/ExitButton"
import { nextImage, prevImage } from "../../../utils"
import AnimatedLogo from "../logo/AnimatedLogo"

export default function ImagePresentation({ title, images, setImgPresentation, selectedImg, scrollPosition }) {

    const [image, setImage] = useState(selectedImg)
    const [reverse, setReverse] = useState(false)

    const transitions = useTransition([image], {
        initial: { transform: 'translateX(0%)' },
        from: { transform: reverse ? 'translateX(-100%)' : 'translateX(100%)' },
        enter: { transform: 'translateX(0%)' },
        leave: { transform: reverse ? 'translateX(100%)' : 'translateX(-100%)' },
    })

    return (
        <div className='fixed z-50 inset-0 bg-black'>
            <div className="relative h-full w-full">

                {transitions((style, item) => {

                    const { url, caption } = images[item]

                    return (
                        <animated.div
                            className='absolute inset-0'
                            style={style}
                        >

                            <div className="absolute inset-0 flex items-center justify-center -z-10">
                                <AnimatedLogo className='h-24' />
                            </div>

                            <Image
                                src={url}
                                quality={100}
                                fill
                                alt={caption}
                                className='h-full w-fit max-w-full mx-auto object-contain'
                            />

                            <div className='absolute bottom-0 from-black to-transparent bg-gradient-to-t p-10 w-full text-white'>
                                <p className="font-sans2">{caption}</p>
                                <small className="tracking-widest">{title}</small>
                            </div>
                        </animated.div>
                    )

                })}

                <PassButton onClick={() => nextImage(setImage, images, setReverse)} />
                <PassButton back onClick={() => prevImage(setImage, images, setReverse)} />

                <ExitButton setImgPresentation={setImgPresentation} scrollPosition={scrollPosition} />

            </div>
        </div >
    )
}