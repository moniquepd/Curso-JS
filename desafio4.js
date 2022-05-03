/* =============================================
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
As tecnologias também devem ser objetos contendo nome e especialidade
===============================================*/

const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        {nome:"C++", especialidade: "Desktop"},
        {nome: "Python", especialidade: "Data Science"},
        {nome: "JavaScript", especialidade: "Web/Mobile"}
    ]
}

console.log (`${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade ${programador.tecnologias[0].especialidade}`)