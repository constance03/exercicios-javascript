
// INTRODUÇÃO: COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }

// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     return a === b
// }

// console.log(checarIgualdade(1, 2));

// // c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior (a, b) {
//     return a > b
// }

// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true 
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
// let nomeDoUsuario
// let anoDeNascimento
// let senhaDoUsuario
// let nacionalidade

// const cadastroUsuario = () => {
//     let usuario = []
//     let nomeDoUsuario = prompt('Qual seu nome?')
//     usuario.push(nomeDoUsuario)
//     let anoDeNascimento= +prompt('Qual seu ano de nascimento?')

//     if (anoDeNascimento > 2004) {
//         alert('Você não é maior de 18 anos')
//     } else {
//         usuario.push(anoDeNascimento)
//         let senhaDoUsuario = prompt('Digite sua senha')
//     }

//     if (senhaDoUsuario.length < 6) {
//         alert('A senha deve ter no mínimo 6 caracteres')
//     } else {
//         let nacionalidade = prompt('Qual sua nacionalidade?').toLowerCase()
//         usuario.push(senhaDoUsuario)
//     }

//     if (nacionalidade !== "brasileira") {
//         alert('Você tem que ser brasileiro(a)')
//     } else {
//         usuario.push(nacionalidade)
//     }
    
//     return usuario
// }
// console.log(cadastroUsuario());

// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const senha = 'devlover'
//     const checarSenha = prompt('Digite a senha')

//     if (checarSenha === senha) {
//         return 'Usuário Logado'
//     } else {
//         return 'Senha Inválida'
//     }
// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------
// const date = new Date()

// const primeiraDose = () => {
//     const nome = prompt('Qual seu nome?')
//     const vacina = prompt('Qual vacina você tomou?').toLowerCase()
//     let tempo
    
//     if (vacina === 'coronavac') {
//         tempo = 28
//         date.setDate(date.getDate() + 28)
        
//     } else if (vacina === 'astrazenica' || vacina === 'pfizer') {
//         tempo = 90
//         date.setDate(date.getDate() + 90)
//     }

//     let data = `${date.toLocaleString('pt-BR').substring(0,10)}`
//     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
// }

// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     if (nomeDoUsuario === 'Artur') {
//         usuarios[0].imunizacao = 'completa'
//         return usuarios[0]
//     } else if (nomeDoUsuario === 'Barbara') {
//         usuarios[1].imunizacao = 'completa'
//         return usuarios[1]
//     } else if (nomeDoUsuario === 'Carlos') {
//         usuarios[2].imunizacao = 'completa'
//         return usuarios[2]
//     }

// }
// console.log(segundaDose('Barbara'));

// Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     for (n of usuarios) {
//         if (n.imunizacao === 'incompleta') {
//             console.log(`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`);
//         }
//     }
// }

// avisoAosAtrasados();


// DESAFIO------------------------------------------------------------------------------------------
// Refatore as funções dos exercícios 3 a 7 para que salvem as informações coletadas em um único objeto “usuários” e usem este objeto para exibir as mensagens e fazer as validações pedidas. 
// Adicione à cada usuário da lista usuarios as informações vacina e imunização. O parâmetro imunização deve receber um valor padrão "incompleta".

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]



// EXERCICIO 3 - Adicione as informações recebidas pelo prompt ao objeto usuarios.

let usuario = {}
const cadastro = () => {

    let nome = prompt('Qual seu nome?')
    let vacina = prompt('Qual vacina você tomou?').toLowerCase() 
    usuario.nome = nome
    usuario.vacina = vacina
    usuario.imunizacao = "incompleta"
    let ano = +prompt('Qual seu ano de nascimento?')
    
    if (ano > 2004) {
        alert('Você não é maior de 18 anos')
    } else {
        usuario.ano = ano
        senha = prompt('Digite sua senha')
    }
    
    if (senha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres')
    } else {
        nacionalidade = prompt('Qual sua nacionalidade?').toLowerCase()
        usuario.senha=senha
    }
    
    if (nacionalidade !== "brasileira") {
        alert('Você tem que ser brasileiro(a)')
    } else {
        usuario.nacionalidade = nacionalidade
    }
    
    return usuarios.push(usuario)
    }
    
cadastro()    
console.log(usuarios);



// EXERCICIO 4 - Faça uma função para ler a lista de usuarios e comparar o valor que vem do prompt com a propriedade senha. 
//Caso encontre uma senha compatível deve devolver as mesmas mensagens.

const login = () => {
    const checarSenha = prompt('Digite a senha')
    usuarios.map((objeto)=>{
        if (checarSenha === objeto.senha) {
            console.log('Usuario logado'); 
        } else {
            console.log('Usuario negado'); 
        }
    })
}
login();



// EXERCICIO 5 -  Devolva a mensagem anteriormente programada dependendo do tipo de vacina tomada.

const date = new Date()

const primeiraDose = () => {
    let tempo

    usuarios.map((objeto) => {
        if (objeto.vacina === 'coronavac') {
            tempo = 28
            date.setDate(date.getDate() + 28)
            
        } else if (objeto.vacina === 'astrazenica' || objeto.vacina === 'pfizer') {
            tempo = 90
            date.setDate(date.getDate() + 90)
        }
    
        let data = `${date.toLocaleString('pt-BR').substring(0,10)}`
        console.log(`Olá ${objeto.nome}! A próxima dose da ${objeto.vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`);
    
    })
}
console.log(primeiraDose())



// EXERCICIO 6 - Receba um nome de usuário por parâmetro, verifique se este nome existe na lista usuarios e mude o valor do parâmetro imunização para "completa".

const segundaDose = (nomeDoUsuario) => {
    usuarios.map((objeto) => {
        if (nomeDoUsuario === objeto.nome) {
            objeto.imunizacao = "completa"
            console.log(objeto)
        }
    })
}

segundaDose("Artur");



// EXERCICIO 7 - Escreva uma função que leia a lista de usuários e verifique a imunização. 
//Caso esteja incompleta, imprima no console uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.

const avisoAosAtrasados = () => {
    usuarios.map((objeto) => {
        if (objeto.imunizacao === 'incompleta') {
            console.log(`Olá ${objeto.nome}! Sua imunização está ${objeto.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`);
        }
    })
}

avisoAosAtrasados()