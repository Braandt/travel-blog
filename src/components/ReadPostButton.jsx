import { useState } from "react";

export default function ReadPostButton() {

    return (
        <div
            className="shadow-lg"
        >

            <button
                className='w-full py-1 px-12 clip text-xl text-black bg-white mix-blend-screen transition-all
                group-hover:bg-orange-400 group-hover:mix-blend-normal group-hover:text-black'
            >
                Ler artigo
            </button>

        </div>
    )
}
