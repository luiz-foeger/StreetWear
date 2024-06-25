const vetCatalogo = [
    {
        id: 1,
        nome: 'TOUCA SOMETIMES',
        preco: 99,
        imagem: 'touca-1.png'
    },
    {
        id: 2,
        nome: 'TOUCA "GOODS LOGO CLASSIC" BCREW',
        preco: 109,
        imagem: 'touca-2.png'
    },
    {
        id: 3,
        nome: 'TOUCA "BASKA" ÖUS',
        preco: 79,
        imagem: 'touca-3.png'
    },{
        id: 4,
        nome: 'BONÉ VELUDO TUPODE',
        preco: 129,
        imagem: 'bone-1.png'
    }
];

for (produtoCatalogo of vetCatalogo) {
    const cardProduto =
        `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
    <img src="../img/acessorios/${produtoCatalogo.imagem}" alt="">
        <p>${produtoCatalogo.nome}</p>
        <p id="paragrafo-preco">R$${produtoCatalogo.preco},90</p>
        <button class="botao-style">ADICIONAR</button>
</div>`;

    document.getElementById("container-produtos").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
};

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
                <p style="font-size: 16px">R$${produto.preco},90</p>
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