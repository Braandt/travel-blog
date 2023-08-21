import Link from "next/link";
import TitleFlag from "../TitleFlag";
import PixButton from "../UI/PixButton";
import { FaPatreon, FaPaypal } from "react-icons/fa";

export default function Donate() {
    return (
        <>
            <TitleFlag text='ajude' className='mx-auto translate-y-1/2 text-lg md:text-xl' />

            <div className="grid-cols-3 items-center bg-pallete-5/70 rounded-xl transition-all
            py-12 px-4
            md:p-24 md:mx-12 md:grid"
            >

                <div className="col-span-2 text-center flex justify-center w-full mb-6">
                    <p className="max-w-lg text-3xl tracking-wider text-white">
                        Aceito ajuda financeira para me manter viajando e produzindo conteúdo <br />
                        Qualquer valor é bem vindo e será usado para alimentação ou para equipamentos para a viagem
                        Muito obrigado :)
                    </p>
                </div>

                <div
                    className="flex flex-col 
                    gap-6 
                    md:gap-12"
                >
                    <DonateButton
                        link='https://www.paypal.com/donate/?hosted_button_id=WUZLUTU67UG4N'
                        text='Doar com PayPal'
                        icon={<FaPaypal className="text-3xl" fill="#fff" />}
                        className='bg-[#2997d8]'
                    />

                    {/* <DonateButton
                        link='/'
                        text='Fazer parte do patreon'
                        icon={<FaPatreon className="text-3xl" fill="#fff" />}
                        className='bg-[#f23f49]'
                    /> */}

                    <PixButton />
                </div>

            </div>
        </>
    )
}

export function DonateButton({ link, icon, text, className }) {
    return (
        <Link
            href={link}
            target="_blank"
            className={`flex justify-center text-white font-sans2 uppercase font-semibold items-center text-lg gap-4 py-4 px-12 rounded-full shadow-md transition-all
                hover:scale-105 hover:shadow-2xl
                ${className}`}
        >
            {icon}
            {text}
        </Link>
    )
}