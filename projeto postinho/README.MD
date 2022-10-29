Exercicios para praticar JavaScript + projeto Postinho de Saúde

- Exercício 1 - Operadores de comparação.
    
    a-) O exercício "a" está completo, e servirá de exemplo para os próximos. 
    
    Escreva uma funções e imprima no console os resultados do comparador de desigualdade a!==b 
    
    ```jsx
    function checarDesigualdade(a, b) {
    
        return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
    
     }
    
    console.log(checarDesigualdade(1, 2));
    ```
    
    b-)Compare a igualdade entre  "a" e "b" e imprima o resultado no console usando a template string como no exemplo acima
    ⚠️Atenção, não esqueça de passar os valores de a e b como parâmetros da função. 
    
    c-)Faça uma função chamada "verificaSeEMaior" e verifique se o parâmetro "a" é maior que o parâmetro "b" use ao final da função um console.log chamando a função dentro e passando os valores de "a" e "b"
    
    ```jsx
    console.log(verificaSeEMaior(1, 2));
    ```
    
- Exercício 2 - Operadores de comparação.
    
     Agora sem usar o código apenas com seus conhecimentos escreva `true` ou `false` para as comparações abaixo:
    
    exemplo 1>2 = false
    
    a-) 1==='1'
    
    b-) 1=='1'
    
    c-) 'a'==='b'
    
    d-) 'b'>'a'
    
     e-) 0!==null
    ⚠️Atenção, as respostas devem ser escritas no código em forma de comentários
    

### 💉A partir daqui faremos funções que poderiam ser usadas para ajudar a organizar a vacinação do postinho de saúde.

- Exercício 3 - Condicional - **Cadastro de usuário**
    
    Escreva uma função que receba do usuário **nomeDoUsario**, **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade** e ****guarde essas informações dentro de um array `usuarios`. Porém só poderão se cadastrar:
    
    - Usuários maiores de 18 anos
    - A senha deve ter no mínimo 6 caracteres
    - E que a nacionalidade seja brasileira.
- Exercício 4- Condicional - **Login do usuário**
    
    Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha cadastrada por ele.  Dentro da função defina uma senha válida  Ex: const senha=”labenu”
    
    - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
    - Caso a senha seja inválida imprima no console (Senha Inválida)
- Exercício 5 - Condicional - **Primeira dose**
    
    Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. E retorne a mensagens a seguir dependendo da vacina tomada.   
    
    ```jsx
    `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    ```
    
    Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose crie uma única variável ‘tempo” que mude seu valor dependendo da vacina informada pelo usuário, faça o mesmo com “data”.
    
    - Coronavac = 28 dias
    - Astrazenica = 90 dias
    - Pfizer = 90 dias
    
    ```jsx
    let tempo = ""
    let data = ""
    ```
    
    ⚠️Atenção: A data pode estar escrita neste formato "01/08/2021" ( o mais simples possível) neste momento do curso. 
    
- Exercício 6 - Loop+Condicional -**Segunda dose**
    
    Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e mude o valor da propriedade `imunização` para **“completa”** para isso vamos te fornecer uma lista de usuários.
    
    ```jsx
    const usuarios = [
           { nome: "Artur", imunizacao: "incompleta" },
           { nome: "Barbara", imunizacao: "incompleta" },
           { nome: "Carlos", imunizacao: "incompleta" }
    ]
    ```
    
    💡Dica:  para acessar os valores guardados em cada propriedade de um objeto use a notação do ponto chamando pelo nome da propriedade.
     **Ex:**  
    
    - objeto.nome // "Bárbara"
    - objeto.vacina // "astrazenica"
    
     
    
- Exercício 7 -  Loop+Condicional - **Aviso aos atrasados**
    
    As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose e temos que enviar uma mensagem para elas no app.
    Escreva uma função que **leia a lista de usuários** e **verifique** se a imunização está completa ou não e caso não esteja completa,  **imprima no console** uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.
    
    ```jsx
    `Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
    ```
    
    pare este exercício vamos te fornecer uma  lista de usuários. 
    
    ```jsx
    const usuarios = [
           { nome: "Artur", imunizacao: "incompleta" },
           { nome: "Barbara", imunizacao: "completa" },
           { nome: "Carlos", imunizacao: "incompleta" }
    ]
    ```
    
- DESAFIO
    
    Refatore as funções dos exercícios 3 a 7 para que salvem as informações coletadas em um único objeto “usuários” e usem este objeto para exibir as mensagens e fazer as validações pedidas .
    
    Para isso será usado o objeto - `usuarios` abaixo:
    
    ```jsx
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
            ano: 1999,
            nacionalidae: "brasileiro",
            senha: "123456",
            vacina: "coronavac",
            imunizacao: "incompleta"
        }
    
    ]
    ```
    
    - Exercício 3 - refatorado
        
        No desafio ao invés de cadastrar o usuário enviando para o array, você vai adicionar as informações recebidas pelo prompt ao objeto `usuarios.`
        
         
        
    - Exercício 4 - refatorado
        
        No desafio, o exercício 4 deve ser refatorado para ler a lista de `usuarios` e comparar o **valor que vem do prompt** com a propriedade **senha.** 
        Caso encontre uma senha compatível deve devolver as mesmas mensagens.
        
    - Exercício 5 - refatorado
        
        Neste exercício você deve adicionar à cada usuário da lista `usuarios` as informações **vacina** e **imunização.** 
         O parâmetro ****imunização deve receber um valor padrão **"incompleta"** além de devolver a mensagem anteriormente programada. 
        
    - Exercício 6 - refatorado
        
        Neste exercício você deve receber um nome de usuário por parâmetro, verificar se este nome existe na lista `usuarios` e  caso exista mudar o valor do parâmetro **imunização** para **"completa"**
        
    - Exercício 7 - refatorado
        
        Pense em outra forma diferente da primeira de ler a lista e devolver a mesma mensagem; mesmo