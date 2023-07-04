import TitleFlag from "@/components/TitleFlag"
import PagesHero from "@/components/sections/PagesHero"
import Link from "next/link"
import Image from "next/image"
import { FaPatreon, FaPaypal } from "react-icons/fa"
import PixButton from "@/components/UI/PixButton"
import Head from "next/head"
import { mainTitle } from "../../utils"
import Donate from "@/components/sections/Donate"
import Charity from "@/components/sections/Charity"

export default function help() {


    const pageTitle = mainTitle + ' Ajudar'

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <PagesHero header='Ajude a manter a roda girando' subheader='Se gostou do meu conteúdo, ajude a manter essa experiência acontecendo para que eu possa trazer mais inforamação e insipiração para quem gosta de aventura' />


            <Donate />

            <Charity />

        </>
    )
}