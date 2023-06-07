import Link from "next/link";

export default function Nav() {
    return (
        <nav className="w-full left-0 flex items-center justify-center h-12 bg-black text-white z-50">

            <div className="flex items-center">
                {/* Left */}
                <div className="flex gap-12 justify-end pr-12 w-80">
                    <Link href='/'>
                        Posts
                    </Link>
                    <Link href='/'>
                        Photos
                    </Link>
                </div>

                {/* Logo */}
                <Link href='/'>
                    <div className="bg-white h-8 aspect-square rounded-full"></div>
                </Link>

                <div className="flex gap-12 pl-12 w-80">
                    {/* Right */}
                    <Link href='/'>
                        about
                    </Link>
                    <Link href='/'>
                        shop
                    </Link>
                </div>
            </div>

        </nav>
    )
}
