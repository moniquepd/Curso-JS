/* =============================================
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
Nome: Rocketseat
Cor: Roxo
Foco: Programação
Endereço:
Rua: Rua Guilherme Gembala
Número: 260
===============================================*/

const empresa = {
        nome:   "Rocketseat",
        cor:    "Roxo",
        foco:   "programação",
        endereco: {
            rua: "rua Guilherme Gembala",
            nro: 260
        }
    }
console.log (`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.nro}`)
