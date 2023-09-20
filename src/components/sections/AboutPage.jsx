import Image from "next/image";
import AboutText from "./AboutText";
import TitleFlag from "../TitleFlag";
import ContactButton from "../UI/ContactButton";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from 'react-icons/bs'

export default function AboutPage() {

    const iconStyle = 'w-6 h-6'
    const envelope = <FaEnvelope className={iconStyle} />
    const whatsApp = <BsWhatsapp className={iconStyle} />
    const instagram = <FaInstagram className={iconStyle} />

    return (
        <>
            <div className="min-h-screen grid mx-6 gap-6 my-12 bg-pallete-2 rounded-lg
        md:grid-cols-2 md:gap-12
        ">

                <AboutText />

                <div className="flex items-center">
                    <Image
                        src={'/images/posts/a-neuquen/a-neuquen-34.jpg'}
                        width={500}
                        height={500}
                        alt="A handsome guy"
                        className="object-contain h-fit rounded-xl"
                    />
                </div>

            </div>

            <div>
                <TitleFlag
                    className='mx-auto text-xl my-6'
                    text='contato'
                />

                <div className="flex justify-center mb-24 gap-12">
                    <ContactButton
                        href='mailto:leoobrandt@hotmail.com'
                        text='leoobrandt@hotmail.com'
                        icon={envelope}
                        color='bg-blue-400'
                    />
                    <ContactButton
                        href='https://wa.me/5541987304848'
                        text='+55 (41) 98730-4848'
                        icon={whatsApp}
                        color='bg-pallete-5'
                    />
                    <ContactButton
                        href='https://ig.me/m/pedalaleo'
                        text='@pedalaleo'
                        icon={instagram}
                        color='bg-pallete-4'
                    />
                </div>
            </div>
        </>
    )
}
