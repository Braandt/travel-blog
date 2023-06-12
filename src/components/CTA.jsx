import { BsBicycle } from 'react-icons/bs'
import TitleFlag from './TitleFlag'
import SubStackForms from './SubStackForms'

export default function CTA() {
    return (
        <div className="relative bg-[#fff] py-3">

            <TitleFlag
                className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl z-10'
                text='inscreva-se'
            />

            <div className='w-full max-w-6xl mx-auto flex items-center justify-center gap-12'>

                <div className="w-1/2 flex flex-col text-xl items-end gap-2">
                    <p className="font-sans2">Assine as newsletters para receber as próximas histórias e fotos no seu email</p>
                </div>

                <div className="w-1/2">
                    <div className='relative'>

                        <SubStackForms />

                        {/* <form>
                            <label htmlFor="email">
                                <input
                                    className="h-12 rounded-full px-5 w-full shadow-xl tracking-widest"
                                    type="email"
                                    id="email"
                                    placeholder="email..."
                                />
                            </label>
                        </form> */}
                        {/* <button
                            className="absolute top-0 bottom-0 right-0 px-8 m-1 rounded-full bg-pallete-4 text-white transition-all
                            hover:bg-pallete-2 active:scale-90"
                        >
                            <BsBicycle className='w-8 h-8 font-bold' />
                        </button> */}
                    </div>
                </div>

            </div>

        </div>
    )
}
