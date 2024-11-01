const vetCatalogo = [
    {
        id: 1,
        nome: 'TOUCA SOMETIMES',
        preco: 84,
        imagem: 'touca-1.png'
    },
    {
        id: 2,
        nome: 'TOUCA "GOODS LOGO CLASSIC" BCREW',
        preco: 89,
        imagem: 'touca-2.png'
    },
    {
        id: 3,
        nome: 'TOUCA "BASKA" ÖUS',
        preco: 79,
        imagem: 'touca-3.png'
    },
    // {
    //     id: 4,
    //     nome: 'TOUCA CUFFLESS "GROOVY" HIGH',
    //     preco: 99,
    //     imagem: 'touca-4.png'
    // },
    {
        id: 4,
        nome: 'TOUCA THRASHER',
        preco: 99,
        imagem: 'touca-4.png'
    },
    {
        id: 5,
        nome: 'BONÉ "BARRA CAMO" BCREW',
        preco: 129,
        imagem: 'bone-1.png'
    },
    {
        id: 6,
        nome: 'BONÉ "LOGO AREIA" BCREW',
        preco: 98,
        imagem: 'bone-2.png'
    },
    {
        id: 7,
        nome: 'BONÉ VELUDO TUPODE',
        preco: 119,
        imagem: 'bone-3.png'
    },
    {
        id: 8,
        nome: 'BONÉ "DOGGY STYLE®" BOLOVO',
        preco: 124,
        imagem: 'bone-4.png'
    },
    {
        id: 9,
        nome: 'BONÉ UTILITY BAW',
        preco: 129,
        imagem: 'bone-5.png'
    }
];

// for (produtoCatalogo of vetCatalogo) {
//     const cardProduto =
//         `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
//     <img src="../img/acessorios/${produtoCatalogo.imagem}" alt="">
//         <p>${produtoCatalogo.nome}</p>
//         <p id="paragrafo-preco">R$${produtoCatalogo.preco},00</p>
//         <button onclick="abrirCarrinho()" id='adicionar-${produtoCatalogo.id}' <i class="fa-solid fa-cart-plus botao-style" style="font-family=serif;"></i></button></div>`;

//     document.getElementById("container-produtos").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
// };

function renderizarCatalogo() {
    for (const produtoCatalogo of vetCatalogo) {
        const cardProduto =
            `<div id="card-produto-${produtoCatalogo.id}" class="card-produto modelo ${produtoCatalogo.moletom ? 'moletom' : 'camiseta'}">
    <img src="../img/acessorios/${produtoCatalogo.imagem}" alt="Imagem de ${produtoCatalogo.nome}">
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