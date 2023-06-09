import Link from "next/link";

export default function Nav() {
    return (
        <nav className="w-full left-0 flex items-center justify-center h-12 bg-pallete-2 tracking-widest text-white z-50">

            <div className="flex items-center">
                {/* Left */}
                <div className="flex gap-12 justify-end pr-12 w-80">
                    <NavItem href='/' name='posts' />
                    <NavItem href='/' name='photos' />
                </div>

                {/* Logo */}
                <Link href='/'>
                    <div className="bg-white h-8 aspect-square rounded-full"></div>
                </Link>

                <div className="flex gap-12 pl-12 w-80">
                    {/* Right */}
                    <NavItem href='/' name='about' />
                    <NavItem href='/' name='shop' />
                </div>
            </div>

        </nav>
    )
}

export function NavItem({ href, name }) {
    return (
        <Link href={href}>
            {name}
        </Link>
    )
}