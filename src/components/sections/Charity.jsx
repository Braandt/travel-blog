import Image from "next/image"
import Link from "next/link"

export default function Charity() {

    const charityEntities = [
        { id: 1, href: 'https://www.savethechildren.org/', image: '/images/charity/save-the-children.svg', alt: 'save-the-children' }
    ]

    return (
        <>
            <div className="flex flex-col items-center py-40">
                <h1 className="text-3xl">
                    Parte do dinheiro vai para instituições de caridade
                </h1>
                <p className="py-6 font-sans2">Veja as instituições que para onde é destinado parte do dinheiro arrecadado</p>

                <div className='flex mx-12 max-w-7xl gap-6'>

                    {charityEntities.map(entity => (
                        <CharityItem key={entity.id} href={entity.href} image={entity.image} alt={entity.alt} />
                    ))}

                </div>
            </div>
        </>
    )
}

export function CharityItem({ href, image, alt }) {
    return (
        <Link
            href={href}
            className="bg-[#fff] rounded-3xl p-6 shadow-sm transition-all
            hover:shadow-lg"
            target="_blank">
            <Image
                src={image}
                width={300}
                height={300}
                alt={alt}
            />
        </Link>
    )
}