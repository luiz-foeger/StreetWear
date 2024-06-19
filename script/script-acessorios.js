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

