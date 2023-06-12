import Link from "next/link";

export default function AnimatedLogo({ className }) {
    return (
        <Link
            href='/'
            className={`aspect-square rounded-full bg-white font-serif overflow-clip
            ${className}`}
        >
            <div
                className="h-full bg-contain bg-center bg-no-repeat scale-150 translate-x-2 -rotate-3"
                style={{ backgroundImage: 'url(/images/animatedlogo1_2.gif)' }}
            ></div>
        </Link>
    )
}
