//PASSO 1 - Criando uma variável no JS pra trabalhar com a listagem de linguagens
const listaSelecaoLinguagens = document.querySelectorAll(".linguagem");

//PASSO 2 - Identificando o evento de clique no elemento da listagem
listaSelecaoLinguagens.forEach(linguagem => {
    linguagem.addEventListener("click", () => {
        //PASSO 3 - Removendo a classe aberto só do cartão que tá aberto
        esconderCartaoLinguagem();

        //PASSO 4 - Ao clicar em uma linguagem da lista pega-se o id dessa linguagem pra saber qual cartão abrir
        const idLinguagemSelecionado = mostrarCartaoLinguagemSelecionado(linguagem);

        //PASSO 5 - Removendo a classe ativo que marca a linguagem selecionada na listagem
        desativarLinguagemNaListagem();

        //PASSO 6 - Adicinando a classe ativo na linguagem selecionada na listagem
        ativarLinguagemSelecionadaNaListagem(idLinguagemSelecionado);
    })
})

function ativarLinguagemSelecionadaNaListagem(idLinguagemSelecionado) {
    const linguagemSelecionadaNaListagem = document.getElementById(idLinguagemSelecionado);
    linguagemSelecionadaNaListagem.classList.add("ativo");
}

function desativarLinguagemNaListagem() {
    const linguagemAtivoNaListagem = document.querySelector(".ativo");
    linguagemAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoLinguagemSelecionado(linguagem) {
    const idLinguagemSelecionado = linguagem.attributes.id.value;
    const idDoCartaoLinguagemParaAbrir = "cartao-" + idLinguagemSelecionado;
    const cartaoLinguagemParaAbrir = document.getElementById(idDoCartaoLinguagemParaAbrir);
    cartaoLinguagemParaAbrir.classList.add("aberto");
    return idLinguagemSelecionado;
}

function esconderCartaoLinguagem() {
    const cartaoLinguagemAberto = document.querySelector(".aberto");
    cartaoLinguagemAberto.classList.remove("aberto");
}

