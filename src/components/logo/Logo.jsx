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
            className={`relative h-20 aspect-square flex items-center justify-center rounded-full shadow-sm transition-all group
            hover:scale-105
            active:scale-95 
            ${className}`}
        >
            <div
                className={`absolute h-full flex items-end justify-center transition-all opacity-0
                group-hover:rotate-0 group-hover:scale-100
                ${ready && 'rotate-90 scale-50 !opacity-100'}`}
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
                className="absolute h-full rounded-full bg-center aspect-square bg-contain transition-all
                group-hover:-rotate-12 group-hover:shadow-lg"
                style={{ backgroundImage: 'url(/images/logo/logo3simple.svg)', backgroundRepeat: 'no-repeat' }}
            >
            </div>
        </div>
    )
}
