export default function Button({ children, className, onClick }) {
    return (
        <button
            className={`flex items-center justify-center bg-black/20 outline outline-1 outline-white/50 w-10 aspect-square rounded-full backdrop-blur-2xl text-white transition-all
            hover:bg-black/10
            ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}