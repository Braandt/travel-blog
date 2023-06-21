export default function Logo({ className }) {
    return (
        <div
            className={`h-20 aspect-square flex items-center justify-center rounded-full bg-white -rotate-3 shadow-sm
            ${className}`}
        >
            <div
                className="h-5/6 rounded-full bg-center aspect-square bg-contain"
                style={{ backgroundImage: 'url(/images/animatedlogo1_2.gif)', backgroundRepeat: 'no-repeat' }}
            >
            </div>
        </div>
    )
}
