import Image from "next/image"
import { useState } from "react"
import { copyToClipboard } from "../../../utils"

export default function PixButton() {

    const [pixVisible, setPixVisible] = useState(false)
    const [copied, setCopied] = useState(false)


    const handleClick = () => {
        if (pixVisible) {
            copyToClipboard('e2330c80-feb1-4f00-a491-7257c2573007', '\n🎯 Chave copiada com sucesso! 🎉\n\n**\ne2330c80-feb1-4f00-a491-7257c2573007\n**\n\n Cole no app do seu banco para fazer um pix 😉\nObrigado!')
            setCopied(true)
        } else {
            setPixVisible(true)
        }
    }

    return (
        <button
            className={`relative flex justify-center text-white font-sans2 uppercase font-semibold text-lg py-4 shadow-md transition-all rounded-3xl
            md:px-12 
            hover:scale-105 hover:shadow-xl
            active:scale-100 active:bg-black/20
            ${copied ? 'bg-black/20' : 'bg-pallete-3'}`}
            onClick={handleClick}
        >
            {!pixVisible &&
                <div className="flex whitespace-nowrap items-center gap-4">
                    <Image
                        src='/images/pix.png'
                        width={40}
                        height={40}
                    />
                    Fazer um PIX
                </div>
            }

            {pixVisible &&
                <div
                    className="flex flex-col items-center gap-4"
                    onClick={() => {

                    }}
                >
                    <p>e2330c80-feb1-4f00-a491-7257c2573007</p>
                    <div
                        className='bg-white p-2 rounded-xl transition-all'
                    >
                        <Image
                            src='/images/qrcodepix.png'
                            width={200}
                            height={200}
                            alt="QR Code para pagamento em pix, chave: e2330c80-feb1-4f00-a491-7257c2573007"
                        />
                    </div>
                    {copied ?
                        <p>Chave PIX copiada 👍</p> :
                        <div>
                            <p>Escaneie o QR code ou</p>
                            <p>Clique para copiar a chave</p>
                        </div>

                    }
                </div>
            }
        </button>
    )
}
