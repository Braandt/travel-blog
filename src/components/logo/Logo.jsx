import { useEffect, useRef, useState } from "react"
import { arcText } from "../../../utils"

export default function Logo({ className }) {

    const arcRef = useRef(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        arcText(arcRef.current, 60, -1)
        setReady(true)
    }, [arcRef])

    return (
        <div
            className={`relative transition-all group
            hover:scale-105
            active:scale-95 
            ${className}`}
        >
            <div
                className={`absolute inset-0 flex items-end justify-center transition-all opacity-0 -z-10
                group-hover:rotate-0 group-hover:scale-100
                ${ready && 'rotate-90 scale-50 md:!opacity-100'}`}
            >
                <p
                    ref={arcRef}
                    className="text-[#71791B] transition-all drop-shadow-lg
                    -mb-6"
                >
                    PedalaLeo
                </p>
            </div>

            <div
                className="h-full rounded-full bg-center aspect-square bg-contain transition-all shadow-xl
                group-hover:-rotate-12"
                style={{ backgroundImage: 'url(/images/logo/logo3simple.svg)', backgroundRepeat: 'no-repeat' }}
            >
            </div>
        </div>
    )
}
