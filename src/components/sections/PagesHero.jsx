export default function PagesHero({ header, subheader }) {
    return (
        <div className='text-center my-24 mt-32'>

            <div className='text-6xl mb-6'>{header}</div>
            <div className='font-sans2 mx-auto max-w-4xl'>{subheader}</div>

        </div>
    )
}
