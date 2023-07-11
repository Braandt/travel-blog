import TitleFlag from "../TitleFlag";
import { useState } from "react";
import MapScreen from "../MapScreen";
import Image from "next/image";

export default function Welcome() {

    const [mapVisible, setMapVisible] = useState(false)
    const [scrollPosition, setScrollPosition] = useState()

    const handleClick = () => {
        setMapVisible(true)
        setScrollPosition(document.documentElement.scrollTop / document.documentElement.offsetHeight)
    }

    return (
        <div className="mt-24 mb-10">

            <TitleFlag text='Bem-Vindo' className='mx-auto translate-y-1/2' />

            <div className="bg-black/5 w-full py-16 px-6">
                <p className="text-center max-w-3xl mx-auto font-sans2 tracking-wider">
                    👋 Me chamo Leonardo e estou viajando do Brasil até o Ushuaia de bicicleta <br />
                    Sigo por caminhos pouco convencionais e documentando tudo que conseguir com fotos e vídeos. Veja a
                    <button
                        onClick={handleClick}
                        className="inline-link"
                    >
                        &nbsp;rota planejada e os lugares por onde já passei
                    </button>.🚲
                </p>
            </div>

            {mapVisible &&
                <MapScreen setMapVisible={setMapVisible} scrollPosition={scrollPosition} />
            }
        </div>
    )
}