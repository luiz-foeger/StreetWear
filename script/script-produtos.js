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
        preco: 205,
        imagem: 'blusa-1.png'
    },
    {
        id: 11,
        nome: 'BLUSA "D ROSES" DIAMOND',
        preco: 198,
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
        preco: 119,
        imagem: 'blusa-4.png'
    }, 
    {
        id: 14,
        nome: 'MOLETOM "DEATH ANGEL" DIAMOND ',
        preco: 259,
        imagem: 'moletom-1.png'
    }
];

for (produtoCatalogo of vetCatalogo) {
    const cardProduto =
        `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
    <img src="../img/camisetas/${produtoCatalogo.imagem}" alt="">
        <p>${produtoCatalogo.nome}</p>
        <p id="paragrafo-preco">R$${produtoCatalogo.preco},90</p>
        <button class="botao-style">ADICIONAR</button>
</div>`;

    document.getElementById("container-produtos").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
};


