

// Usuários e tecnologias

const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
  ]


// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

//for (let i = 0; i < usuarios.length; i++) {
    for (let usuario of usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios)

   if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios.nome} trabalha com CSS`)
    }
}