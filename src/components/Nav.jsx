import Link from "next/link";

export default function Nav() {
    return (
        <nav className="w-full flex items-center justify-center gap-12 h-12 bg-black text-white z-50">

            {/* Left */}
            <Link href='/'>
                Features
            </Link>
            <Link href='/'>
                equipped
            </Link>

            {/* Logo */}
            <div>
                <div className="bg-white h-8 aspect-square rounded-full"></div>
            </div>

            {/* Right */}
            <Link href='/'>
                about
            </Link>
            <Link href='/'>
                shop
            </Link>

        </nav>
    )
}
