import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export function imageDataToJson() {

    const diretorioImagens = 'C:/Users/leoob/OneDrive/02computer-science/01Projects/travel-blog/public/images/posts/a-neuquen'

    // Função para obter as informações de uma imagem
    function obterInformacoesImagem(caminhoImagem) {
        const imagem = path.parse(caminhoImagem)
        const id = uuidv4() // Gerar um ID aleatório
        console.log(id);
        return {
            id,
            nome: imagem.base,
            formato: imagem.ext,
            diretorioImagens: imagem.dir,
            // Adicione mais dados conforme necessário
        }
    }

    // Função para percorrer o diretório de imagens e obter as informações de cada imagem
    function obterInformacoesImagens(diretorioImagens) {
        console.log()
        return new Promise((resolve, reject) => {
            fs.readdirSync(diretorioImagens, (err, files) => {
                if (err) {
                    reject(err)
                    console.log(err);
                } else {
                    const informacoesImagens = files
                        .filter(file => fs.statSync(path.join(diretorioImagens, file)).isFile())
                        .map(file => obterInformacoesImagem(path.join(diretorioImagens, file)))
                    console.log(informacoesImagens);
                    resolve(informacoesImagens)
                }
            })
        })
    }

    // Obter as informações de todas as imagens no diretório
    obterInformacoesImagens(diretorioImagens)
        .then(informacoesImagens => {
            const jsonImagens = JSON.stringify(informacoesImagens, null, 2)
            console.log(informacoesImagens)
            fs.writeFile('informacoes_imagens.json', jsonImagens, 'utf8', (err) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log('Arquivo JSON gerado com sucesso.')
                }
            })
        })
        .catch(err => {
            console.error(err)
        })

}