// ------------------------------------------semana 1 -------------------------------------------------------

objetoNeeds = {
    nome: 'Needs Protetor Diário',
    fps: 30,
    tipoDepele: 'Todos os tipos de pele',// no futuro posso transformar isso em if
    corDapele: 'Todos os tons de pele', // no futuro posso transformar isso em if
    consistencia: 'Creme',
    duracao: '6horas',
    quantidade: '60 g',
    tipo: 'Quimico',
    preco: 30.00,
    trataApele: true, //posso tranformar em um if
    temCheiro: false, //posso tranformar em um if
    ondeEncontrar: ['Shopee', ' Amazon', ' Beleza na web', ' Época cosmeticos'],
    imagem:"./imagens/NEEDS.png",
    link:"https://www.mulhersemphotoshop.com.br/2019/09/needs-face.html"
}
objetoIsdin = {
    nome: 'Isdin Fusion Water',
    fps: 60,
    tipoDepele: 'Pele oleosa',
    corDapele: 'Todos os tons de pele',
    consistencia: 'liquído',
    duracao: '2horas',
    quantidade: '50 ml',
    tipo: 'Quimico',
    preco: 80.00,
    trataApele: false,
    temCheiro: true,
    ondeEncontrar: ['Shopee', ' Amazon', ' Beleza na web', ' Época cosmeticos'],
    imagem: "./imagens/ISDIN.png",
    link:"https://www.mulhersemphotoshop.com.br/2020/05/isdin-fusion-water.html"
}
objetoEpisol = {
    nome: 'Episol Sec Oc',
    fps: 60,
    tipoDepele: 'oleosa',
    corDapele: 'branca',
    consistencia: 'Creme',
    duracao: '6 horas',
    quantidade: '60 ml',
    tipo: 'Quimico',
    preco: 70.00,
    trataApele: true,
    temCheiro: true,
    ondeEncontrar: ['Shopee', 'Amazon', 'Beleza na web', 'Época cosmeticos'],
    imagem: "./imagens/EPISOL.png",
    link:"https://www.youtube.com/watch?v=rK6U_X0Nq_Y"
   
}   
//_______________________________________________________DOM_________________________________________________________
const todosObjetos = [objetoNeeds,objetoIsdin,objetoEpisol]
const sectionItens = document.querySelector(".meusItens")

function adicionaItens (array){
    for (let i in array){

   
    sectionItens.innerHTML+= `
     <div id="caixa1" class="textoImagem">  

     <h3 class="titulo"><a href=${array[i].link}
            target="_blank">${array[i].nome}</a></h3>

    <div class="box-image-texto">
       
        <img id="primeira-imagem" src= ${array[i].imagem}>
        <ul>

            <li>Fps: ${array[i].fps}</li>
            <li>Tipo: ${array[i].tipo}</li>
            <li>Preço: ${array[i].preco}</li>
            <li>Duração: ${array[i].duracao}</li>
            <li>Quantidade:${array[i].quantidade}</li>
            <li>Tem cheiro:${array[i].temCheiro}</li>
            <li>Trata a pele:${array[i].trataApele}</li>
            <li>Consistencia: ${array[i].consistencia}</li>
            <li>Cor da pele:${array[i].corDapele}</li>
            <li>Tipo de pele: ${array[i].tipoDepele}</li>
            <li>Onde encontrar: ${array[i].ondeEncontrar}</li>
            
        </ul>
    </div>
</div> `
}

}
adicionaItens(todosObjetos)
const input = document.querySelector("#recebe")

function pesquisarObjeto (){
    const filtrarArray = todosObjetos.filter((objeto)=>{
        if (objeto.nome.toLowerCase().includes(input.value.toLowerCase())){
            return objeto
   
        }  
    })
    if(input.value === " "){
        alert("Digite o nome de um produto")
    }else if (filtrarArray.length === 0) {
        alert("Nenhum produto encontrado")
    }else {
        sectionItens.innerHTML = " "
        adicionaItens(filtrarArray)
    }
    
}
//----------------------------------------------- semana 2 -------------------------------------------------
// const protetoresSolares = []

// if (objetoNeeds.trataApele === true && objetoNeeds.temCheiro === true) {
//     protetoresSolares.push(objetoNeeds)
// } else {
//     alert('O item não foi adicionado.')
// }

// if (objetoIsdin.trataApele === true && objetoIsdin.temCheiro === true) {
//     protetoresSolares.push(objetoIsdin)
// } else {
//     alert('O item não foi adicionado.')

// }
// if (objetoEpisol.trataApele === true && objetoEpisol.temCheiro === true) {
//     protetoresSolares.push(objetoEpisol)
// } else {
//     alert('O item não foi adicionado.')

// }
// console.log(protetoresSolares)

// console.log(objetoEpisol = {
//     nome: 'Episol Sec Oc',
//     fps: 60,
//     tipoDepele: 'oleosa',
//     corDapele: 'branca',
//     consistencia: 'Creme',
//     duracaoDaprotecao: 6,
//     quantidade: '60 ml',
//     tipo: 'Quimico',
//     preco: 70.00,
//     trataApele: true,
//     temCheiro: true,
//     ondeEncontrar: ['Shopee', 'Amazon', 'Beleza na web', 'Época cosmeticos']
// })

//------------------------------------------------semana 3--------------------------------------------------
// let protetoresSolaresString = ''

// for (let i in objetoNeeds.ondeEncontrar) {
//     protetoresSolaresString = objetoNeeds.ondeEncontrar.join()

//     console.log(`Nome: ${objetoNeeds.nome}
//     FPS: ${objetoNeeds.fps}
//     Tipo de pele: ${objetoNeeds.tipoDepele}
//     Cor da pele: ${objetoNeeds.corDapele}
//     Consistencia: ${objetoNeeds.consistencia}
//     Duração da proteção: ${objetoNeeds.duracaoDaprotecao}
//     Quantidade: ${objetoNeeds.quantidade}
//     Tipo: ${objetoNeeds.tipoNeeds}
//     Preço: ${objetoNeeds.preco}
//     Onde encontrar:${protetoresSolaresString}`)
// }
// const funcaoProtetorSolar = ((objetoNeeds) => {
//     for(let i in objetoNeeds){
//         console.log(`${objetoNeeds.nome} \n ${objetoNeeds.fps} \n ${objetoNeeds.tipoDepele} \n ${objetoNeeds.corDapele} \n ${objetoNeeds.consistencia} \n ${objetoNeeds.duracao} \n ${objetoNeeds.quantidade} \n ${objetoNeeds.tipo} \n ${objetoNeeds.preco}`)
//      }   
//         })
// funcaoProtetorSolar(objetoNeeds)

//------------------------------------------------------------------------------------------
//QUESTÃO 4 RESOLVIDA COM FUNÇÃO (ESTÁ CORRETA. Tirar o PROMPT)
//  const arrayStep = []
// arrayStep.push(objetoEpisol,objetoNeeds, objetoIsdin)

// const recebeCaracteristica = prompt('Digite a característica você deseja encontrar:')
// function funcaoDeArray (array,string){
//     for (let i in arrayStep  ){
//         if (array[i].quantidade === string){
//         return console.log(array[i])  
//         }
//     }return alert('não foi encontrado')
// }
// funcaoDeArray(arrayStep,'50 ml') 

// //_________________________________________________________________________
 ////QUESTÃO 4 COM O METODO FILTER
// const nomedafuncao = arrayStep.filter((item)=>{
//     return item.quantidade === '60 ml'
// })
// console.log(nomedafuncao)
// //______________________________________________________________________

// // QUESTÃO 4 COM O METODO FIND
// function pesquisa (resposta){
// return resposta.tipo === 'Quimico'
// }
// console.log(arrayStep.find(pesquisa))

// //com arrow function
// const resulta = arrayStep.find( resposta => resposta.tipo === 'Quimico' )
// console.log(resulta) 
// //________________________________________________________________________
// //QUESTÃO 4 USANDO FOR OF
//  const novoArray = {} 
// for (const {nome,quantidade} of arrayStep){
//     console.log(`${nome} : ${quantidade}`)
// }
// //_______________________________________________________________________
// // 4 QUESTÃO METODO FOR EACH = passa uma função call back.
// arrayStep.forEach(function(achar){
//     if(achar.quantidade === '50 ml') {
//         console.log(achar);
//     }
// })
// //_________________________________________________________________________
// // 4 QUESTÃO METODO MAP
//  //{não consegui fazer}
//  //__________________________________________________________________________ 

// //REDUCE
//  var numeros = [0, 1, 2, 3, 4, 5, 6];
// var total = numeros.reduce((acumulador, numero, indice, original) => {
// console.info(`${acumulador} total até o momento`);
// console.log(`${numero} valor atual`);
// console.log(`${indice} indice atual`);
// console.log(`${original} array original`);
// return acumulador += numero;
// }, 0)
// console.warn('acaboooou');
// console.log(total) 
// //___________________________________________________________________
// const nomeDaFuncao = arrayStep.filter((item,busca,string)=>{
//     if (item.busca === string){
//         return item.busca
//     }
// })
// _____________________________________________________________________
//SEMANA 5 MEDIA QUERY

//SEMANA 6 - DOM (NÃO ENTENDI)

// const button = document.querySelector(botao)//chamando as tags pelo id
// const input = document.querySelector(recebe)

// const box1 = document.querySelector(caixa1)
// const box2 = document.querySelector(caixa2)
// const box3 = document.querySelector(caixa3)
// botao.onClick()

// button.addEventListner("clique", function(arg){
// arg.preventDefault() //cancela o evento padrão de carregamento (do bubble)

// const pegaInput = input.value //pega o valor do input
// console.log(pegaInput)

// if( pegaInput === needs){
// caixa2 = none && caixa3 = none
// }
// else if(pegaInput === isdin){
//     caixa1 = none && caixa3 = none
// }
// else if (pegaInput===episol){
//     caixa1 = none && caixa2 = none
// }
// else{ alert('Protetor não cadastrado')
// }
// })

