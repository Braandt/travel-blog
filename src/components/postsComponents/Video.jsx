import Image from "next/image";
import { useEffect } from "react";

export default function Video({ videos, selectedVideo }) {

    let url = ''

    useEffect(() => {

        if (videos.length > 1) {
            url = videos[selectedVideo].url
        }

    }, videos)

    return (
        <video
            width='500'
            height='500'
            controls
        >
            <source
                src={url}
                type='video/mp4'
            />
        </video>
    )
}
