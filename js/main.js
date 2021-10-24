let ordem = [];
let ordemUsuario = [];

let pontuacao = -1

const azul = document.querySelector(".Azul")
const amarelo = document.querySelector(".Amarelo")
const vermelho = document.querySelector(".Vermelho")
const verde = document.querySelector(".Verde")

let sleep = (segundos) => {
    let tempoAtual = new Date().getTime()
    while (tempoAtual+(segundos*1000)>= new Date().getTime()){}
}


let sorteio = () => {
    let ordemCores = Math.floor(Math.random()*4);
    ordem[ordem.length] = ordemCores;
    ordemUsuario = [];

    for (let i in ordem) {
        let corElemento = criaElemento(ordem[i])
        acende(corElemento)
    }
    
}

let acende  = (elemento) => {
    
    setTimeout(()=> {
        elemento.classList.remove("deselected")
        setTimeout(()=> {
            elemento.classList.add("deselected")
        },400)    
    },1000)    

}

let checarOrdem = () => {
    for(let i in ordemUsuario) {
        if( ordemUsuario[i] != ordem[i] ){
            perdeu();
            break;
        }
    }
    if(ordemUsuario.length == ordem.length) {
        proximoNivel();
    }

}

let clique = (cor) => {
    ordemUsuario[ordemUsuario.length] = cor;
    criaElemento(cor).classList.remove("deselected")    

    setTimeout(()=> {
        criaElemento(cor).classList.add("deselected")
        checarOrdem()
    },250)

}

let criaElemento = (codigo) => {
   switch (codigo){
       case 0:
           return verde
       case 1:
           return vermelho
       case 2:
           return amarelo
       case 3:
           return azul
   }
}  

let proximoNivel = () => {
    pontuacao++
    document.querySelector(".centro").innerHTML = pontuacao
    sorteio();
} 

let perdeu = () => {
    alert(`Pontuação: ${pontuacao-1}! Clique em ok para iniciar um novo jogo`)
    comecar()
}

let comecar = () => {
    ordemUsuario = []
    ordem = []
    pontuacao = -1
    proximoNivel()
}

verde.onclick = () => clique(0)
vermelho.onclick = () => clique(1)
amarelo.onclick = () => clique(2)
azul.onclick = () => clique(3)


comecar()