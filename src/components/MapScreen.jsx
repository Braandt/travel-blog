import { useEffect } from "react"
import { exitButtonFunction } from "../../utils"

export default function MapScreen({ setMapVisible, scrollPosition }) {

    useEffect(() => {
        window.onkeydown = (evt) => {
            evt.key === 'Escape' && exitButtonFunction(setMapVisible(false), scrollPosition)
        }
    })

    return (
        <div
            onClick={() => exitButtonFunction(setMapVisible, scrollPosition)}
            className="flex fixed inset-0 items-center justify-center bg-black/80 z-50"
        >
            <iframe src="https://www.google.com/maps/d/embed?mid=1RogCgiA0heAthnsZhyNWz2bA1WVVZ0s&ehbc=2E312F" width="80%" height="80%" className=" rounded-xl"></iframe>

        </div>
    )
}
