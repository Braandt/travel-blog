import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen grid mx-6 gap-6 py-6 pb-12
        md:grid-cols-2 md:gap-12
        ">

            <div className="w-fit justify-self-end place-self-center">
                <p
                    className="max-w-xl text-justify"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat ab obcaecati consectetur in laborum itaque recusandae. Eaque distinctio quas, tempore doloribus veritatis laboriosam fugiat minus atque sunt et consectetur aperiam voluptatibus labore obcaecati ea quasi culpa nihil minima. Labore culpa quas officia aspernatur delectus reprehenderit libero dolores quia optio.
                </p>
            </div>

            <div className="flex items-center">
                <Image
                    src={'/images/posts/a-neuquen/a-neuquen-34.jpg'}
                    width={500}
                    height={500}
                    alt="A handsome guy"
                    className="object-contain h-fit rounded-xl"
                />
            </div>

        </div>
    )
}
