//Cálculo de aposentadoria

const nome = "Carlos"
const sexo = "Masculino"
const idade = 55
const contribuicao = 40
const calculo = idade + contribuicao

// idade + contribuição do homem precisa ser de no mínimo 95 anos
// Idade + contribuição do mulher precisa ser de no mínimo 85 anos

if((sexo == "Feminino" && (calculo)>= 85 && contribuicao>=30 ) || (sexo =="Masculino" && (calculo)>=95 && contribuicao >=35)) {
    console.log (`${nome}, você pode se aposentar`)
} else {
    console.log (`${nome}, você não pode se aposentar`) 
}