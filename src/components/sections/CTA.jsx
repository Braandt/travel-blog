import TitleFlag from '../TitleFlag'

export default function CTA() {
    return (
        <div className="relative bg-pallete-3 py-8">

            <TitleFlag
                className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl z-10'
                text='inscreva-se'
            />

            <div className='w-full mx-auto flex flex-wrap items-center justify-center gap-12 p-12'>

                <div>
                    <p className=" tracking-widest text-3xl text-center max-w-lg">Assine as newsletters para receber as próximas histórias e fotos no seu email</p>
                </div>

                <div className="rounded-3xl px-6 py-2 bg-[#fff] overflow-clip">

                    <iframe src="https://leoobrandt.substack.com/embed"></iframe>

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

        </div >
    )
}
