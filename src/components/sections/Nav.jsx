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
            <div
                className="bg-pallete-2 h-16
                md:h-12"
            ></div>
            <nav
                className='fixed top-0 w-full left-0 flex items-center justify-center h-16
                bg-pallete-2 tracking-widest z-40 transition-all duration-300 text-amber-50
                md:h-12'
                style={{ transform: navVisible ? 'translateY(0)' : 'translateY(-150px)' }}
            >

                <div className="flex items-center w-full px-2
                max-w-sm
                md:max-w-lg"
                >
                    {/* Left */}
                    <div className='flex justify-between flex-1
                    mr-6
                    md:mr-12'
                    >

                        <NavItem href='/posts' name='posts' />
                        <NavItem href='/photos' name='fotos' />

                    </div>

                    {/* Logo */}
                    <Link href='/'>
                        <Logo
                            className='h-12
                            md:h-16 md:mt-7'
                        />
                    </Link>

                    {/* Right */}
                    <div className="flex justify-between flex-1
                    ml-6
                    md:ml-12"
                    >

                        <NavItem href='/about' name='sobre' />
                        <NavItem href='/help' name='ajudar' />

                    </div>
                </div>

            </nav>
        </>
    )
}

export function NavItem({ href, name }) {
    return (
        <Link
            href={href}
            className="hover:text-amber-300"
        >
            {name}
        </Link>
    )
}