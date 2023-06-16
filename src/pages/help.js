import TitleFlag from "@/components/TitleFlag"
import PagesHero from "@/components/sections/PagesHero"
import Link from "next/link"
import Image from "next/image"
import { FaPatreon, FaPaypal } from "react-icons/fa"
import PixButton from "@/components/UI/PixButton"

export default function help() {

    const charityEntities = [
        { id: 1, href: 'https://www.savethechildren.org/', image: '/images/charity/save-the-children.svg', alt: 'save-the-children' }
    ]

    return (
        <div className=''>

            <PagesHero header='🚲 Ajude a manter a roda girando 💸' subheader='Se gostou do meu conteúdo, ajude a manter essa experiência acontecendo para que eu possa trazer mais inforamação e insipiração para quem gosta de aventura' />

            <TitleFlag text='ajude' className='mx-auto translate-y-1/2 text-xl' />
            <div className="grid grid-cols-3 items-center bg-green-400 px-24 py-12 transition-all">

                <div className="col-span-2 text-center flex justify-center w-full">
                    <p className="max-w-lg text-2xl tracking-wider">
                        Faça uma doação única ou periódica de qualquer valor ou assine meu patreon para receber conteúdo exclusivo
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    <DonateButton
                        link='https://www.paypal.com/donate/?hosted_button_id=WUZLUTU67UG4N'
                        text='Doar com PayPal'
                        icon={<FaPaypal className="text-3xl" fill="#fff" />}
                        className='bg-[#2997d8]'
                    />

                    <DonateButton
                        link='/'
                        text='Fazer parte do patreon'
                        icon={<FaPatreon className="text-3xl" fill="#fff" />}
                        className='bg-[#f23f49] hover:shadow-2xl'
                    />

                    <PixButton />
                </div>

            </div>

            <div className="flex flex-col items-center py-12">
                <h1 className="text-3xl">
                    Parte do dinheiro vai para instituições de caridade
                </h1>
                <p className="py-6 font-sans2">Veja as instituições que para onde é destinado parte do dinheiro arrecadado</p>

                <div className='flex mx-12 max-w-7xl gap-6'>

                    {charityEntities.map(entity => (
                        <Charity key={entity.id} href={entity.href} image={entity.image} alt={entity.alt} />
                    ))}

                </div>
            </div>

        </div>
    )
}

export function DonateButton({ link, icon, text, className }) {
    return (
        <Link
            href={link}
            target="_blank"
            className={`flex whitespace-nowrap justify-center text-white font-sans2 uppercase font-semibold items-center text-lg gap-4 py-4 px-12 rounded-full shadow-md transition-all
                hover:scale-105
                ${className}`}
        >
            {icon}
            {text}
        </Link>
    )
}

export function Charity({ href, image, alt }) {
    return (
        <Link
            href={href}
            className="bg-[#fff] rounded-md p-6"
            target="_blank">
            <Image
                src={image}
                width={300}
                height={300}
                alt={alt}
            />
        </Link>
    )
}