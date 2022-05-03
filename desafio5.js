//teste
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:
//

// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
//   ];
  
 
//   for (let i = 0; i < usuarios.length; i++){
// console.log (`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]} e ${usuarios[i].tecnologias[1]} `)
    
// }


  // Usuários e tecnologias

const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'], bichos: ["gato", "cachorro"] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'], bichos: ["passaro", "cachorro"] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js','paulo', 'xuxu'], bichos: ["gato", "cachorro","periquito"] }
  ]

  for (let usuario of usuarios){
      console.log (`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
  }