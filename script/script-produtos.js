const vetCatalogo = [
    {
        id: "1",
        nome: 'CAMISETA "THINK" HIGH',
        preco: 142,
        imagem: 'camiseta-1.png'
    },
    {
        id: "2",
        nome: 'CAMISETA "RAZOR" HIGH',
        preco: 142,
        imagem: 'camiseta-2.png'
    },
    {
        id: "3",
        nome: 'CAMISETA "CELLPHONE" HIGH',
        preco: 142,
        imagem: 'camiseta-3.png'
    },
    {
        id: "4",
        nome: 'CAMISETA "GOLF" HIGH',
        preco: 153,
        imagem: 'camiseta-4.png'
    },
    {
        id: "5",
        nome: 'CAMISA POLO SPORT HIGH',
        preco: 168,
        imagem: 'camiseta-5.png'
    },
    {
        id: "6",
        nome: 'CAMISETA "COMET" HIGH',
        preco: 142,
        imagem: 'camiseta-6.png'
    },
    {
        id: "7",
        nome: 'CAMISETA "ACID LOVE" LOVE DELIVERY',
        preco: 127,
        imagem: 'camiseta-7.png'
    },
    {
        id: "8",
        nome: 'CAMISETA "CINZEIRO" KUNX',
        preco: 139,
        imagem: 'camiseta-8.png'
    },
    {
        id: "9",
        nome: 'CAMISETA "GRAFF" KUNX',
        preco: 131,
        imagem: 'camiseta-9.png'
    },
    {
        id: "10",
        nome: 'BLUSA "L.T.H.T" ALLGLORY',
        preco: 198,
        imagem: 'blusa-1.png'
    },
    {
        id: "11",
        nome: 'BLUSA "D ROSES" DIAMOND',
        preco: 176,
        imagem: 'blusa-2.png'
    },
    {
        id: "12",
        nome: 'BLUSA "POSTING LESS" SOMETIMES',
        preco: 119,
        imagem: 'blusa-3.png'
    },
    {
        id: "13",
        nome: 'BLUSA "LUCK" SOMETIMES ',
        preco: 121,
        imagem: 'blusa-4.png'
    },
    {
        id: "14",
        nome: 'MOLETOM "DEATH ANGEL" DIAMOND ',
        preco: 259,
        imagem: 'moletom-1.png'
    },
    {
        id: "15",
        nome: 'MOLETOM "CLASS INVERSO" CLASS ',
        preco: 229,
        imagem: 'moletom-2.png'
    },
    {
        id: "16",
        nome: 'MOLETOM "GOODS LOGO ÓRBITA" BC ',
        preco: 259,
        imagem: 'moletom-3.png'
    }
];


function renderizarCatalogo() {
    for (const produtoCatalogo of vetCatalogo) {
        const cardProduto =
            `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
    <img src="../img/camisetas/${produtoCatalogo.imagem}" alt="Imagem de ${produtoCatalogo.nome}">
        <p>${produtoCatalogo.nome}</p>
        <p id="paragrafo-preco">R$${produtoCatalogo.preco},90</p>
        <button onclick="abrirCarrinho()" id='adicionar-${produtoCatalogo.id}' <i class="fa-solid fa-cart-plus botao-style" style="font-family=serif;"></i></button>
</div>`;

        document.getElementById("container-produtos").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
    };

    for (const produtoCatalogo of vetCatalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
    };
}

//// LÓGICA DE MANIPULAÇÃO DA QUANTIDADE / PREÇO DE PRODUTOS NO CARRINHO

const qtdProdutoId = lerInfoSalva('carrinho') ?? {};

function addQtdProduto(idProdutos) {
    qtdProdutoId[idProdutos]++;
    salvarInfo("carrinho", qtdProdutoId);
    atualizarQtdProduto(idProdutos);
    atualizarPrecoCarrinho();
}

function removeQtdProduto(idProdutos) {
    if (qtdProdutoId[idProdutos] === 1) {
        alert("ESTE ITEM SERÁ REMOVIDO DO SEU CARRINHO!")
        removerProdutoCarrinho(idProdutos);
        return;
    }
    qtdProdutoId[idProdutos]--;
    salvarInfo("carrinho", qtdProdutoId);
    atualizarQtdProduto(idProdutos);
    atualizarPrecoCarrinho();
}

function atualizarQtdProduto(idProdutos) {
    document.getElementById(`quantidade-${idProdutos}`).innerText = qtdProdutoId[idProdutos];
}

function removerProdutoCarrinho(idProdutos) {
    delete qtdProdutoId[idProdutos];
    salvarInfo("carrinho", qtdProdutoId);
    renderizarProdutosCarrinho();
    atualizarPrecoCarrinho();
}

function atualizarPrecoCarrinho() {
    let total = 0;

    for (const idProdutos in qtdProdutoId) {
        total += vetCatalogo.find((produto) => produto.id === idProdutos).preco * qtdProdutoId[idProdutos]; //parseInt
    }
    document.getElementById("preco-carrinho").innerText = `TOTAL: R$${total}`;
}

function salvarInfo(chave,informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
    // localStorage.setItem("qtdProdutoId", JSON.stringify(qtdProdutoId));
}

function lerInfoSalva(chave) {
    return JSON.parse(localStorage.getItem(chave));
    // return JSON.parse(localStorage.getItem("qtdProdutoId"));
    // qtdProdutoId = JSON.parse(localStorage.getItem("qtdProdutoId")) || {};
}

//// LÓGICA DE GERAÇÃO DOS PRODUTOS NO CARRINHO

function gerarProdutoCarrinho(idProdutos) {
    const produto = vetCatalogo.find(produto => produto.id === idProdutos);

    const containerProdutosCarrinho = document.getElementById("conteudo-carrinho");
    const createArticleProduto = document.createElement('article'); //<article></article>

    const produtoAdicionado =
        `<img src="/img/camisetas/${produto.imagem}" style="width: 100px;" alt="Carrinho: ${produto.nome}">
            <div id="info-conteudo-carrinho">
                <p>${produto.nome}</p>
                <p>ID: ${produto.id}</p>
                <p style="font-size: 16px">R$${produto.preco},90</p>
            </div>
            <div id="quantidade-produto">
                <button id="btnRemoveQtd-${produto.id}">-</button>
                <p id="quantidade-${produto.id}">${qtdProdutoId[produto.id]}</p>
                <button id="btnAddQtd-${produto.id}">+</button>
            </div>
            <button onclick="" id="remover-item-${produto.id}"><i class="fa-solid fa-trash-can"></i></button>`;

    createArticleProduto.innerHTML = produtoAdicionado;
    containerProdutosCarrinho.appendChild(createArticleProduto);
    // document.getElementById("conteudo-carrinho").innerHTML += produtoAdicionado;

    //// ATRIBUIÇÃO DE AÇÕES AOS BOTÕES DO CARRINHO
    document.getElementById(`btnRemoveQtd-${produto.id}`).addEventListener('click', () => removeQtdProduto(produto.id));
    document.getElementById(`btnAddQtd-${produto.id}`).addEventListener('click', () => addQtdProduto(produto.id));
    document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerProdutoCarrinho(idProdutos));
}

/////////////////////////////////////////////

function renderizarProdutosCarrinho() {
    const containerProdutosCarrinho = document.getElementById("conteudo-carrinho");
    containerProdutosCarrinho.innerHTML = '';

    for (const idProduto in qtdProdutoId) {
        gerarProdutoCarrinho(idProduto);
    }
}

function adicionarAoCarrinho(idProdutos) {
    if (idProdutos in qtdProdutoId) {
        addQtdProduto(idProdutos);
        return;
    }
    qtdProdutoId[idProdutos] = 1;

    gerarProdutoCarrinho(idProdutos);
    salvarInfo("carrinho", qtdProdutoId);
    atualizarPrecoCarrinho();

}
