// Definir constantes
// Definir critérios / lógica / 

const Gato1 = "Mel"
const Gato2 = "Leela"
const Gato3 = "Lelis"

const IdadeG1 = 6
const IdadeG2 = 5
const IdadeG3 = 8

//if(IdadeG1 > IdadeG2) {
//    console.log(`${Gato1} é mais velha que ${Gato2}`)
//} else {
//    console.log(`${Gato1} é mais nova que ${Gato2}`)
//}
//if (IdadeG1 > IdadeG3) {
//    console.log(`${Gato1} é mais velha que ${Gato3}`)
//} else {
//   console.log(`${Gato1} é mais nova que ${Gato3}`)
//}


//teste

const alunosdaturmaA = [
    {
        nome: "Mayk",
        nota: 10
    },
    {
        nome: "Diego",
        nota: 10    
    },
    {
        nome: "fulano",
        nota: 5
    }
]

const alunosdaturmaB = [
    {
        nome: "CLayton",
        nota: 5
    },
    {
        nome: "Robson",
        nota: 5    
    },
    {
        nome: "ciclano",
        nota: 10
    },
    {
        nome: "Novo Aluno",
        nota: 10
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma /alunos.length
    return media
}

const media1 = calculaMedia(alunosdaturmaA)
const media2 = calculaMedia(alunosdaturmaB)

function enviaMensagem (media, turma) {
    // Se a média for > 5, parabenizar a turma
    if (media > 5) {
        console.log (`A media da ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log (`A media da ${turma} é menor que 5`)
    }
}

enviaMensagem (media1, "Turma A")
enviaMensagem (media2, "Turma B")

