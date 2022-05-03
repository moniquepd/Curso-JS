/* =============================================

    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a
    ==      Igual a
    ===     Igual e do mesmo tipo 
    !=      Diferente de
    !==     Diferente, inclusive do tipo

    =       Recebe
    null    "zerar informação"


===============================================*/

/* =============================================

    OPERADORES LÓGICOS

    && "E"  As duas condições devem ser verdadeiras
            para que a condição final seja verdadeira

    || "OU" Uma das condições deve ser verdadeira para
            para que a condição final seja verdadeira.
    
    ! "NÃO" Nega uma condição

===============================================*/

/* =============================================

    OPERADORES ARITMÉTICOS

    * Multiplicação
    / Divisão
    % Resto da divisão
    + Adição
    - Subtração
    
===============================================*/

/* =============================================

    VARIÁVEIS

    var (var n1 = 5  || var s1 = "JavaScript")
    let

    identificadores
        Podem começar $ ou _
        Não podem começar com nros nem ter espaços
        Pode usar letras e números simbolos
        Não podem ser palavras reservadas

        *Dicas
        Maiúscula e minúsculas tem diferenças
        Nomes coerentes para as variáveis

    typeof - Indentifica o tipo de variável

    

"" - Somente texto

''+' - Concatenação
(number + number) Adição
(string + string) Concatenação

`${}` - Insere variável


window.prompt - sempre retorna string


FORMATAÇÃO

Conversão de tipo string para number:
    
    Number.parseInt(n) nro inteiro
    Number.parseFloat(n) nro real .

    ou

    Number

Conversão de tipo number para string:

    Sytring(n)
    n.toString

var s = "JavaScript"

Formatar STRING
s.length - tamanho que tem (qnts caracteres)
s.toUpperCase() - Letras maiúsculas
s.toLowerCase() - Letras minúsculas

Formatar NUMBER
n.toFixed(2)            - 2 Casas decimais
n.toFixed(2).replace('.',',')    - 2 Casas decimais, troca ponto por vírgula
n.toLocaleString(pt-BR,{style:'currency',currency:'BRL'}) - REAL (Localiza Brasil, estilo monetário) BRL USD EUR


===============================================*/
/* =============================================
JANELAS


window.alert('Minha primeira mensagem')
window.confirm('Está gostando de JS?')
window.prompt('Qual é seu nome?')

Para janela receber número 
var n1 = Number(window.prompt('Digite um número:'))
===============================================*/


/* =============================================

    VARIÁVEIS

    var (var n1 = 5  || var s1 = "JavaScript")
    let

    identificadores
        Podem começar $ ou _
        Não podem começar com nros nem ter espaços
        Pode usar letras e números simbolos
        Não podem ser palavras reservadas

        *Dicas
        Maiúscula e minúsculas tem diferenças
        Nomes coerentes para as variáveis

    typeof - Indentifica o tipo de variável


===============================================*/

/* =============================================

    Objetos e vetores

    Objetos:
        const aluno01 = {
            nome: "fulano",
            nota: 10
        }
    para chamaro valor colocar aluno01.nome ou aluno01.nota

    Vetores: - coleção de objetos
    const alunos = [
        {
            nome: "fulano",
            nota: 10
        },
        {
            nome: "ciclano",
            nota: 7
        }
    ]
    para chamaro valor colocar alunos[0].nota alunos[1].nota
    
===============================================*/

/* =============================================

    FUNÇÕES E MÉTODOS
    (reaproveitamento de códigos / crie função que calcula o que vc precisa)
    
    FUNÇÕES
    function calculaMedia(xxxxx) {
        return ()
    }
    
    (f(x) -> f(valor definido anteriormente))
    

    for ([inicialização]; [condição]; [expressão final])
        declaração

    for (let [variável temporária] of [valor de referência])
    
===============================================*/