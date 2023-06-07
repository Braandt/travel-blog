import { BsBicycle } from 'react-icons/bs'

export default function CTA() {
    return (
        <div className="relative py-24 mt-12 bg-pallete-3">

            <div className="absolute top-0 w-full -translate-y-1/2">
                <h1 className='clip bg-black text-white px-6 py-1 text-xl w-fit mx-auto'>
                    Inscreva-se!
                </h1>
            </div>
            <div className='w-full max-w-6xl mx-auto flex items-center justify-center gap-12'>

                <div className="w-1/2 flex flex-col items-end gap-2">
                    <p className="text-xl font-sans2">Assine as newsletters para receber os próximos post no seu email</p>
                </div>

                <div className="w-1/2">
                    <div className='relative'>
                        <form>
                            <label htmlFor="email">
                                <input
                                    className="h-12 rounded-full px-5 w-full shadow-xl"
                                    type="email"
                                    id="email"
                                    placeholder="email..."
                                />
                            </label>
                        </form>
                        <button
                            className="absolute top-0 bottom-0 right-0 px-8 m-1 rounded-full bg-pallete-4 text-white transition-all
                            hover:scale-90 active:scale-100"
                        >
                            <BsBicycle className='w-8 h-8 font-bold' />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
