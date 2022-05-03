//Criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média


const Aluno01 = 'Monique'
const notaAluno01 = 5.8

const Aluno02 = 'Paulo'
const notaAluno02 = 4

const Aluno03 = 'Luna'
const notaAluno03 = 2 //Nota Baixa

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


//Se a média for maior que 5, parabenizar a turma.
if (media > 5) {
    console.log(`Parabéns Turminha, a nota foi de ${media}!!!`)
}
else {
    console.log("Média é menor que 5!")
}