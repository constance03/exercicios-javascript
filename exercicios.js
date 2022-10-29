// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function compararNumeros(a, b) {
    return a - b
}
function retornaArrayOrdenado(array) {
    return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const filtrarArray = array.filter((elemento) => {
      return elemento % 2 === 0  
    })
    return filtrarArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPares = array.filter((elemento) => {
        return elemento % 2 === 0  
      })
    const arrayElevada = arrayPares.map((elemento) => {
        return elemento**2
    })
    return arrayElevada
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (i of array){
        if (i > maiorNumero) {
            maiorNumero = i
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto= {}

    if (num1 > num2) {
        objeto.maiorNumero = num1
        menorNumero = num2
    } else {
        objeto.maiorNumero = num2
        menorNumero = num1
    }

    if (objeto.maiorNumero%menorNumero===0) {
        objeto.maiorDivisivelPorMenor = true
    } else {
        objeto.maiorDivisivelPorMenor = false
    }

    objeto.diferenca = objeto.maiorNumero - menorNumero

    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++ ) {
        if (i % 2 ===0) {
            numerosPares.push(i);
        }
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function compararNumeros(a, b) {
    return a - b
}
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayFinal
    let arrayOrganizada = array.sort(compararNumeros)
    arrayFinal = [arrayOrganizada[arrayOrganizada.length-2], arrayOrganizada[1]]

    return arrayFinal
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme.atores = filme.atores.join(", ")
    return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`);
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = []
    for (i of pessoas) {
        if (i.altura >= 1.5 && i.idade > 14 && i.idade < 60) {
            pessoasAutorizadas.push(i)
        }
    }
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []
    for (i of pessoas) {
        if (i.altura < 1.5 || i.idade <= 14 || i.idade > 60) {
            pessoasNaoAutorizadas.push(i)
        }
    }
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (objeto of contas) {
        let compras = 0
        for (valores in objeto.compras) {
            compras += objeto.compras[valores]
        }
        objeto.compras = []
        objeto.saldoTotal -= compras
    }
    return contas
}


// EXERCÍCIO 15A
function organizar(a,b) {
    if(a.nome < b.nome) return -1;
    if(a.nome > b.nome) return 1;
    return 0;
}
  
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort(organizar)
}

// EXERCÍCIO 15B
let consultas =  [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" }
  ]

function organizar (a,b) {
    a = a.dataDaConsulta.split('/').reverse().join('');
    b = b.dataDaConsulta.split('/').reverse().join('');
    return a > b ? 1 : a < b ? -1 : 0;
    // return a.localeCompare(b);         // <-- alternativa
}

function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort(organizar);
}

console.log(retornaArrayOrdenadoPorData(consultas));