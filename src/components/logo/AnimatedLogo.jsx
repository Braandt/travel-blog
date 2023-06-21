import Link from "next/link";

export default function AnimatedLogo({ className }) {
    return (
        <Link
            href='/'
            className={`aspect-square rounded-full bg-gradient-to-t font-serif overflow-clip transition-all bg-amber-50
            hover:scale-[105%]
            ${className}`}
        >
            <div
                className="h-full bg-contain bg-center bg-no-repeat scale-90 translate-x-1 -rotate-3"
                style={{ backgroundImage: 'url(/images/animatedlogo1_2.gif)' }}
            ></div>
        </Link>
    )
}
