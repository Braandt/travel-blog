export default function TitleFlag({ text, className }) {

    return (
        <div className={`clip tracking-wide bg-pallete-2 text-white px-6 py-1 w-fit h-fit select-none ${className}`}>
            {text}
        </div>
    )
}
