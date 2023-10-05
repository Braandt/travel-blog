import Link from "next/link";

export default function PostGreeting() {
    return (
        <div
            className='text-center flex flex-col items-center py-12 border-b-2 border-dashed border-pallete-2/30'
        >
            <h1 className='text-4xl py-4'>
                Obrigado por ler!
            </h1>

            <p className='font-sans2 max-w-xl'>Se quiser me ajudar a ir ainda mais longe, confira&nbsp;
                <Link
                    href='/help'
                    className='inline-link'
                >
                    aqui
                </Link>
                &nbsp;como me dar uma força. Veja&nbsp;
                <Link
                    href="/posts"
                    className='inline-link'
                >
                    todos as histórias
                </Link>,
                &nbsp;eu também posto fotos e vídeos no&nbsp;
                <Link
                    href='https://instagram.com/pedalaleo'
                    className='inline-link'
                >
                    Instagram
                </Link>
            </p>
        </div>
    )
}
