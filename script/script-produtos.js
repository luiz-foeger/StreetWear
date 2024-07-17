const vetCatalogo = [
    {
        id: "1",
        nome: 'CAMISETA "THINK" HIGH',
        preco: 142,
        imagem: 'camiseta-1.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "2",
        nome: 'CAMISETA "RAZOR" HIGH',
        preco: 142,
        imagem: 'camiseta-2.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "3",
        nome: 'CAMISETA "CELLPHONE" HIGH',
        preco: 142,
        imagem: 'camiseta-3.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "4",
        nome: 'CAMISETA "GOLF" HIGH',
        preco: 153,
        imagem: 'camiseta-4.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "5",
        nome: 'CAMISA POLO SPORT HIGH',
        preco: 168,
        imagem: 'camiseta-5.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "6",
        nome: 'CAMISETA "COMET" HIGH',
        preco: 142,
        imagem: 'camiseta-6.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "7",
        nome: 'CAMISETA BAW x SMILEY NICE DAY',
        preco: 151,
        imagem: 'camiseta-7.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "8",
        nome: 'CAMISETA "CINZEIRO" KUNX',
        preco: 139,
        imagem: 'camiseta-8.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "9",
        nome: 'CAMISETA "GRAFF" KUNX',
        preco: 136,
        imagem: 'camiseta-9.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "10",
        nome: 'CAMISETA "ASSINATURA" BCREW',
        preco: 129,
        imagem: 'camiseta-10.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "11",
        nome: 'CAMISETA "B TRIBAL" BCREW ',
        preco: 141,
        imagem: 'camiseta-11.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "12",
        nome: 'CAMISETA "B GARÇA REMIX" BCREW',
        preco: 136,
        imagem: 'camiseta-12.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "13",
        nome: 'CAMISETA "BERÇO B" BCREW',
        preco: 136,
        imagem: 'camiseta-13.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "14",
        nome: 'CAMISETA "ACID LOVE" LOVE DELIVERY',
        preco: 129,
        imagem: 'camiseta-14.png',
        moletom: false,
        modelo: 'camiseta'
    },
    {
        id: "15",
        nome: 'BLUSA "L.T.H.T" ALLGLORY',
        preco: 198,
        imagem: 'blusa-1.png',
        moletom: false,
        modelo: 'blusa'
    },
    {
        id: "16",
        nome: 'BLUSA "D ROSES" DIAMOND',
        preco: 176,
        imagem: 'blusa-2.png',
        moletom: false,
        modelo: 'blusa'
    },
    {
        id: "17",
        nome: 'BLUSA "POSTING LESS" SOMETIMES',
        preco: 119,
        imagem: 'blusa-3.png',
        moletom: false,
        modelo: 'blusa'
    },
    {
        id: "18",
        nome: 'BLUSA "LUCK" SOMETIMES ',
        preco: 121,
        imagem: 'blusa-4.png',
        moletom: false,
        modelo: 'blusa'
    },
    {
        id: "19",
        nome: 'MOLETOM "DEATH ANGEL" DIAMOND ',
        preco: 259,
        imagem: 'moletom-1.png',
        moletom: true,
        modelo: 'moletom'
    },
    {
        id: "20",
        nome: 'MOLETOM "CLASS INVERSO" CLASS ',
        preco: 229,
        imagem: 'moletom-2.png',
        moletom: true,
        modelo: 'moletom'
    },
    {
        id: "21",
        nome: 'MOLETOM "GOODS LOGO ÓRBITA" BCREW ',
        preco: 259,
        imagem: 'moletom-3.png',
        moletom: true,
        modelo: 'moletom'
    },
    {
        id: "22",
        nome: 'MOLETOM "BREAKING & ENTERING" DEATHWISH ',
        preco: 259,
        imagem: 'moletom-4.png',
        moletom: true,
        modelo: 'moletom'
    }
];


function renderizarCatalogo() {
    for (const produtoCatalogo of vetCatalogo) {
        const cardProduto =
            `<div id="card-produto-${produtoCatalogo.id}" class="card-produto modelo ${produtoCatalogo.moletom ? 'moletom' : 'camiseta'}">
    <img src="../img/camisetas/${produtoCatalogo.imagem}" alt="Imagem de ${produtoCatalogo.nome}">
        <p>${produtoCatalogo.nome}</p>
        <p id="paragrafo-preco">R$${produtoCatalogo.preco},00</p>
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
        alert(`ESTE ITEM SERÁ REMOVIDO DO SEU CARRINHO!`)
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

function salvarInfo(chave, informacao) {
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
                <p style="font-size: 16px">R$${produto.preco},00</p>
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


//////////////////////////////////////////

function gerarProdutoCheckout(idProdutos, idContainerHtml, qtdProdutoCheckout) {
    const produto = vetCatalogo.find(produto => produto.id === idProdutos);

    const containerProdutosCarrinho = document.getElementById("idContainerHtml");
    const createArticleProduto = document.createElement('article'); //<article></article>

    const produtoAdicionado =
        `<img src="/img/camisetas/${produto.imagem}" style="width: 100px;" alt="Carrinho: ${produto.nome}">
            <div id="info-conteudo-carrinho">
                <p>${produto.nome}</p>
                <p>ID: ${produto.id}</p>
                <p style="font-size: 16px">R$${produto.preco},00</p>
            </div>
            <div id="quantidade-produto">
                <p id="quantidade-${produto.id}">${qtdProdutoCheckout}</p>
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