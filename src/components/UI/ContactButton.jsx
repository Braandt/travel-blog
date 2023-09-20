import Link from "next/link";

export default function ContactButton({ href, icon, text, color }) {
    return (
        <Link
            href={href}
            target="_blank"
            className={`flex bg-blue-400 items-center px-8 py-4 rounded-full text-white gap-4 tracking-widest ${color}`}
        >
            {icon}
            {text}
        </Link>
    )
}