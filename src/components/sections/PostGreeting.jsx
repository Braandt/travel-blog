import Link from "next/link";

export default function PostGreeting() {
    return (
        <div
            className='text-center flex flex-col items-center py-12 border-b-2 border-dashed border-pallete-2/30'
        >
            <h1 className='font-script text-4xl py-4'>
                Obrigado por ler!
            </h1>

            <p className='font-sans2 max-w-xl'>Se quiser me ajudar a ir ainda mais longe, confira
                <Link href='/help' className='inline-link'> aqui </Link>
                como me dar uma força. Veja
                <Link href="/posts" className='inline-link'> todos as histórias</Link>,
                eu também posto fotos e vídeos no
                <Link href='https://instagram.com/pedalaleo' className='inline-link'> Instagram </Link>
                e no
                <Link href='https://www.youtube.com/channel/pedalaleo' className='inline-link'> YouTube </Link></p>
        </div>
    )
}
