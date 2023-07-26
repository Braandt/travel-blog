import { useEffect, useState } from "react"

export default function Filter({ label, options, setItems, allItems, tags }) {

    const [activeOptions, setActiveOptions] = useState([])

    const locationClickHandler = (loc) => {
        activeOptions.includes(loc) ?
            setActiveOptions(prevState => prevState.filter(item => item != loc)) :
            setActiveOptions(prevState => [...prevState, loc])
    }

    useEffect(() => {
        if (activeOptions.length === 0) {
            setItems(allItems)
        } else {
            setItems(allItems.filter(item => (
                item.frontMatter ? activeOptions.some(r => item.frontMatter[tags].indexOf(r) >= 0) :
                    activeOptions.some(r => item[tags].indexOf(r) >= 0)
            )))
        }
    }, [activeOptions])

    return (
        <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
            <h1 className="text-xl">{label} </h1>
            {options.length > 0 && options.map(loc => (
                <button
                    key={loc}
                    className={`py-1 px-4 rounded-full font-sans2 border-[1px] border-amber-500 transition-all shadow-sm
                            hover:shadow-md
                            active:shadow-sm active:scale-95
                            ${activeOptions[0] && activeOptions.includes(loc) && 'bg-amber-500 text-white'}
                            `}
                    onClick={() => locationClickHandler(loc)}
                >
                    {loc}
                </button>
            ))}
        </div>
    )
}