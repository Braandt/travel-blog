export default function Button({ children, className, onClick }) {
    return (
        <button
            className={`flex items-center justify-center outline-1 outline-white/50 w-10 aspect-square rounded-full 
            text-white transition-all
            md:backdrop-blur-2xl md:bg-black/20 md:outline 
            hover:bg-black/50 hover:outline-white/100
            active:scale-90
            ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}