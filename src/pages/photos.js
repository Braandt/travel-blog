import { mainTitle } from "../../utils";
import Head from "next/head";
import PhotosSection from "@/components/sections/PhotosSection";

export default function photos() {

    const pageTitle = mainTitle + ' Fotos'

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <PhotosSection />
        </>
    )
}
