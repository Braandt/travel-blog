import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../logo/Logo";

export default function Nav() {

    const [navVisible, setNavVisible] = useState(true)

    useEffect(() => {
        window.onscroll = function () {
            this.oldScroll > this.scrollY ? setNavVisible(true) : setNavVisible(false)
            this.oldScroll = this.scrollY
        }
    })

    return (
        <>
            <div className="bg-pallete-2 h-12"></div>
            <nav
                className={`fixed top-0 w-full left-0 flex items-center justify-center h-12 bg-pallete-2 tracking-widest text-white  z-50 transition-all duration-300
            ${navVisible ? 'translate-y-0' : '-translate-y-[100px]'}`}>

                <div className="flex items-center">
                    {/* Left */}
                    <div className="flex gap-12 justify-end pr-12 w-80">

                        <NavItem href='/posts' name='posts' />
                        <NavItem href='/' name='photos' />

                    </div>

                    {/* Logo */}
                    <Link href='/'>
                        <Logo className='mt-12' />
                    </Link>

                    {/* Right */}
                    <div className="flex gap-12 pl-12 w-80">

                        <NavItem href='/' name='about' />
                        <NavItem href='/help' name='ajudar' />

                    </div>
                </div>

            </nav>
        </>
    )
}

export function NavItem({ href, name }) {
    return (
        <Link href={href}>
            {name}
        </Link>
    )
}