import Link from "next/link";

export default function AnimatedLogo({ className }) {
    return (
        <Link
            href='/'
            className={`aspect-square rounded-full bg-gradient-to-t font-serif overflow-clip transition-all bg-gray-50 bg-opacity-80 max-h-96
            ${className}`}
        >
            <div
                className="h-full bg-contain bg-center bg-no-repeat scale-90 translate-x-1 -rotate-3"
                style={{ backgroundImage: 'url(/images/logo/animatedlogo1_2.gif)' }}
            ></div>
        </Link>
    )
}
