export default function Logo({ className }) {
    return (
        <div
            className={`h-20 aspect-square flex items-center justify-center rounded-full bg-white -rotate-3
            ${className}`}
        >
            <div
                className="h-5/6 rounded-full bg-center aspect-square bg-contain"
                style={{ backgroundImage: 'url(/images/logo1.svg)' }}
            >
            </div>
        </div>
    )
}
