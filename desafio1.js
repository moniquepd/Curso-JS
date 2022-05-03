// Calcular IMC e nível de obesidade

const nome = "Carlos"
const peso = 84
const altura = 1.88
const sexo = "Masculino"
const IMC = (peso)/(altura*altura)

if(IMC >= 30){
    console.log(`${nome} você está acima do peso, seu IMC é de ${IMC}`)
} else {
    console.log(`${nome} você não está acima do peso, seu IMC é de ${IMC}`)
}