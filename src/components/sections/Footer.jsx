import Link from 'next/link'
import { FaEnvelope, FaInstagram, FaPatreon, FaTwitter, FaYoutube } from 'react-icons/fa'
import AnimatedLogo from '../logo/AnimatedLogo'

export default function Footer() {

    const year = new Date().getFullYear()

    const iconStyle = 'w-8 h-8 text-pallete-4 hover:text-pallete-3'

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
        <div className="h-screen flex flex-col items-center justify-between py-12 px-24 bg-pallete-2 text-white">

            <AnimatedLogo className='flex-1' />

            <p className="font-sans2 my-12 text-center leading-loose max-w-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt autem, vel sint reprehenderit distinctio perferendis, corporis asperiores quod tenetur velit quia at est repellat ut explicabo aperiam expedita sapiente debitis.</p>

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
                        className='text-white hover:text-pallete-3'
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
