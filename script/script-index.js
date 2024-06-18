const vetCatalogo = [
    {
        id: 1,
        nome: 'CAMISETA "THINK" HIGH',
        preco: 139,
        imagem: 'product-1.jpg'
    },
    {
        id: 2,
        nome: 'CAMISETA "RAZOR" HIGH',
        preco: 139,
        imagem: 'product-2.jpg'
    },
    {
        id: 3,
        nome: 'CAMISETA "CELLPHONE" HIGH',
        preco: 139,
        imagem: 'product-3.jpg'
    },
    {
        id: 4,
        nome: 'CAMISETA "GOLF" HIGH',
        preco: 149,
        imagem: 'product-4.jpg'
    },
    {
        id: 5,
        nome: 'CAMISA POLO SPORT HIGH',
        preco: 169,
        imagem: 'product-5.jpg'
    },
    {
        id: 6,
        nome: 'CAMISETA "COMET" HIGH',
        preco: 139,
        imagem: 'product-6.jpg'
    }
];

for (produtoCatalogo of vetCatalogo) {
    const cardProduto =
        `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
    <img src="img/${produtoCatalogo.imagem}" alt="">
        <p>${produtoCatalogo.nome}</p>
        <p id="paragrafo-preco">R$${produtoCatalogo.preco},90</p>
        <button>ADICIONAR</button>
</div>`;

document.getElementById("container-produtos").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
};


