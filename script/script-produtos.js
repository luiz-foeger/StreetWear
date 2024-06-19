const vetCatalogo = [
    {
        id: 1,
        nome: 'CAMISETA "THINK" HIGH',
        preco: 142,
        imagem: 'camiseta-1.png'
    },
    {
        id: 2,
        nome: 'CAMISETA "RAZOR" HIGH',
        preco: 142,
        imagem: 'camiseta-2.png'
    },
    {
        id: 3,
        nome: 'CAMISETA "CELLPHONE" HIGH',
        preco: 142,
        imagem: 'camiseta-3.png'
    },
    {
        id: 4,
        nome: 'CAMISETA "GOLF" HIGH',
        preco: 153,
        imagem: 'camiseta-4.png'
    },
    {
        id: 5,
        nome: 'CAMISA POLO SPORT HIGH',
        preco: 168,
        imagem: 'camiseta-5.png'
    },
    {
        id: 6,
        nome: 'CAMISETA "COMET" HIGH',
        preco: 142,
        imagem: 'camiseta-6.png'
    },
    {
        id: 7,
        nome: 'CAMISETA "ACID LOVE" LOVE DELIVERY',
        preco: 127,
        imagem: 'camiseta-7.png'
    },
    {
        id: 8,
        nome: 'CAMISETA "CINZEIRO" KUNX',
        preco: 139,
        imagem: 'camiseta-8.png'
    },
    {
        id: 9,
        nome: 'CAMISETA "GRAFF" KUNX',
        preco: 131,
        imagem: 'camiseta-9.png'
    },
    {
        id: 10,
        nome: 'BLUSA "L.T.H.T" ALLGLORY',
        preco: 198,
        imagem: 'blusa-1.png'
    },
    {
        id: 11,
        nome: 'BLUSA "D ROSES" DIAMOND',
        preco: 176,
        imagem: 'blusa-2.png'
    },
    {
        id: 12,
        nome: 'BLUSA "POSTING LESS" SOMETIMES',
        preco: 119,
        imagem: 'blusa-3.png'
    },
    {
        id: 13,
        nome: 'BLUSA "LUCK" SOMETIMES ',
        preco: 121,
        imagem: 'blusa-4.png'
    },
    {
        id: 14,
        nome: 'MOLETOM "DEATH ANGEL" DIAMOND ',
        preco: 259,
        imagem: 'moletom-1.png'
    },
    {
        id: 15,
        nome: 'MOLETOM "CLASS INVERSO" CLASS ',
        preco: 229,
        imagem: 'moletom-2.png'
    },
    {
        id: 16,
        nome: 'MOLETOM "GOODS LOGO ÓRBITA" BC ',
        preco: 259,
        imagem: 'moletom-3.png'
    }
];


function renderizarCatalogo() {
    for (const produtoCatalogo of vetCatalogo) {
        const cardProduto =
            `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
    <img src="../img/camisetas/${produtoCatalogo.imagem}" alt="">
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

function adicionarAoCarrinho(idProdutos) {
    const produto = vetCatalogo.find(p => p.id === idProdutos);

    // const produtosCarrinho = document.getElementById("conteudo-carrinho").innerHTML;

    const produtoAdicionado =
        `<article>
            <img src="/img/camisetas/${produto.imagem}" style="width: 120px;" alt="">
                <div id="info-conteudo-carrinho">
                    <p>${produto.nome}</p>
                    <p>ID: ${produto.id}</p>
                    <p>R$${produto.preco},90</p>
                </div>
            <button onclick="" id="btn-fechar-carrinho"><i class="fa-solid fa-trash-can"></i></button>
        </article>`;

    document.getElementById("conteudo-carrinho").innerHTML += produtoAdicionado;
}