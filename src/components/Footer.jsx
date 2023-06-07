import Link from 'next/link'
import { FaFacebook, FaInstagram, FaPatreon, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {

    const year = new Date().getFullYear()

    const iconStyle = 'w-8 h-8 text-pallete-4 hover:text-pallete-3'
    const socials = [
        { name: 'youtube', url: 'https://www.youtube.com', icon: <FaYoutube className={iconStyle} /> },
        { name: 'instagram', url: 'https://www.instagram.com', icon: <FaInstagram className={iconStyle} /> },
        { name: 'patreon', url: 'https://www.patreon.com', icon: <FaPatreon className={iconStyle} /> },
        { name: 'facebook', url: 'https://www.facebook.com', icon: <FaFacebook className={iconStyle} /> },
        { name: 'twitter', url: 'https://www.twitter.com', icon: <FaTwitter className={iconStyle} /> },
    ]

    const links = [
        { name: 'Post', url: '/posts' },
        { name: 'Photos', url: '/photos' },
        { name: 'Countries', url: '/countries' },
        { name: 'Shop', url: '/shop' },
        { name: 'Sponsors', url: '/sponsors' }
    ]

    return (
        <div className="flex flex-col items-center justify-between py-12 px-24 bg-pallete-2 text-white">

            <Link
                href='/'
                className="h-40 aspect-square rounded-full bg-white font-serif"
            ></Link>

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

            <p className='text-white/40 tracking-widest'>Copyright &copy; {year} - Desenvolvido pro Leonardo Brandt</p>

        </div>
    )
}
