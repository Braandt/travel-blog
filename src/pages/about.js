import AboutPage from "@/components/sections/AboutPage";
import { mainTitle } from "../../utils"
import Head from "next/head"

export default function about() {

    const pageTitle = mainTitle + ' Sobre'

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <AboutPage />
        </>
    )
}
