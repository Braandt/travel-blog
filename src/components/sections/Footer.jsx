import Link from 'next/link'
import { FaEnvelope, FaInstagram, FaPatreon, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {

    const year = new Date().getFullYear()

    const iconStyle = 'w-8 h-8 text-pallete-4 hover:text-amber-400'

    const socials = [
        { name: 'youtube', url: 'https://www.youtube.com', icon: <FaYoutube className={iconStyle} /> },
        { name: 'instagram', url: 'https://www.instagram.com/pedalaleo/', icon: <FaInstagram className={iconStyle} /> },
        { name: 'patreon', url: 'https://www.patreon.com', icon: <FaPatreon className={iconStyle} /> },
        { name: 'twitter', url: 'https://www.twitter.com', icon: <FaTwitter className={iconStyle} /> },
        { name: 'email', url: 'mailto: leoobrandt@hotmail.com', icon: <FaEnvelope className={iconStyle} /> },
    ]

    const links = [
        { name: 'Post', url: '/posts' },
        { name: 'Photos', url: '/photos' },
        { name: 'Sobre', url: '/' },
        { name: 'Ajudar', url: '/ajudar' }
    ]

    return (
        <div className="h-screen flex flex-col items-center justify-between py-12 bg-pallete-2 text-white
        px-6
        md:px-24"
        >

            <Link
                href='/'
                className='aspect-square rounded-full bg-gradient-to-t font-serif overflow-clip transition-all bg-opacity-80 flex-1 max-h-96
                hover:scale-[105%] hover:-rotate-12'
            >
                <div
                    className="h-full bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/images/logo/logo3.svg)' }}
                ></div>
            </Link>

            <p className="font-sans2 text-white/60 my-12 text-center leading-loose max-w-3xl">
                “I learned this, at least, by my experiment: that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.” <br />
                ― Henry David Thoreau
            </p>

            <div className="flex gap-12">
                {socials.map(item => {

                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            target='_blank'
                        >
                            {item.icon}
                        </Link>
                    )
                })}
            </div>

            <div className='flex max-w-xl w-full my-12 justify-between tracking-widest'>
                {links.map(link => (
                    <Link
                        className='text-white hover:text-amber-400'
                        key={link.name}
                        href={link.url}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <small className='text-white opacity-40 tracking-widest'>Copyright &copy; {year} - Desenvolvido por <a className='border-b-2' href='https://leobrandt.vercel.app/' target='_blank'>Leonardo Brandt</a></small>

        </div>
    )
}
