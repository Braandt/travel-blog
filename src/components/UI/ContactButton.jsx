import Link from "next/link";

export default function ContactButton({ href, icon, text, color }) {
    return (
        <Link
            href={href}
            target="_blank"
            className={`flex justify-center w-fit bg-blue-400 items-center px-8 py-4 rounded-full text-white gap-4 transition-all tracking-widest ${color}
            hover:scale-105
            active:scale-100`}
        >
            {icon}
            <p className="whitespace-nowrap">
                {text}
            </p>
        </Link>
    )
}