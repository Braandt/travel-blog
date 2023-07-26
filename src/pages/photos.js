import { mainTitle } from "../../utils";
import Head from "next/head";
import PhotosPage from "@/components/sections/PhotosPage";

export default function photos() {

    const pageTitle = mainTitle + ' Fotos'

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <PhotosPage />
        </>
    )
}
