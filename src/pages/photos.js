import PhotosPage from "@/components/PhotosPage";
import { mainTitle } from "../../utils";
import Head from "next/head";

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
