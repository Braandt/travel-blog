import PagesHero from "@/components/sections/PagesHero"
import Head from "next/head"
import { mainTitle } from "../../utils"
import Donate from "@/components/sections/Donate"
import Charity from "@/components/sections/Charity"

export default function help() {


    const pageTitle = mainTitle + ' Ajudar'

    return (
        <div
            className="mx-4
            md:m-12"
        >
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <PagesHero header='Ajude a manter a roda girando' subheader='Se gostou do meu conteúdo, ajude a manter essa experiência acontecendo para que eu possa trazer mais inforamação e insipiração para quem gosta de aventura' />

            <Donate />

            {/* <Charity /> */}

        </div>
    )
}