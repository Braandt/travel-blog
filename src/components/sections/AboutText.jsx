import Link from "next/link";

export default function AboutText() {
    return (
        <div className="flex flex-col gap-2 w-fit justify-self-end place-self-center font-sans2 text-center max-w-xl text-white p-6 rounded-lg" >
            <p>
                Me chamo Leonardo. Estou viajando sozinho de bicicleta pelo sul do continente americano. Saí dia 22 de agosto de 2023 de Curitiba com o objetivo final de chegar no Ushuaia, extremo sul da Argentina. Com planos de passear bastante pelo sul do Brasil, Argentina e Chile até chegar lá.
            </p>
            <p>
                Com um pouco mais de dinheiro suficiente apenas para pagar alguma emergência médica tento gastar o mínimo possível, pedindo comida e abrigo quando preciso. Me surpreendo cada dia mais com a generosidade e carinho das pessoas que encontro no caminho.
            </p>
            <p>
                Já me perguntaram se estava pagando promessa, de saco cheio, fugindo, ou se isso era algum tipo de prova. Na verdade é só para viajar mesmo, pelo mesmo motivo que as vezes pegamos o carro e vamos para a praia ou para o campo. É para viver experiência que eu não viveria ficando parado, para conhecer mais pessoas de culturas e mentalidades diferentes e principalmente para me conhecer melhor e ver se sou capaz de me virar.
            </p>
            <p>
                Escrevo sobre as coisas que vivencio em um caderninho e posto algumas fotos no&nbsp;
                <Link
                    href='https://instagram.com/pedalaleo?igshid=OGQ5ZDc2ODk2ZA=='
                    target="_blank"
                    className="inline-link"
                >
                    Instagram
                </Link> para quem se interessar poder acompanhar algumas das experiências e talvez para inspirar alguém a fazer a sua própria viagem do jeito que achar melhor, vendo o mundo de uma forma bem diferente.
            </p>
        </div>
    )
}
