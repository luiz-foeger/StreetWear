const vetCatalogo = [
    {
        id: 1,
        nome: 'CAMISETA HIGH "THINK" BLACK',
        preco: 139,
        imagem: 'product-1.jpg'
    },
    {
        id: 2,
        nome: 'CAMISETA HIGH "RAZOR" BLUE',
        preco: 139,
        imagem: 'product-2.jpg'
    },
    {
        id: 3,
        nome: 'CAMISETA HIGH "CELLPHONE" WHITE',
        preco: 139,
        imagem: 'product-3.jpg'
    },
    {
        id: 4,
        nome: 'CAMISETA HIGH "GOLF" YELLOW',
        preco: 149,
        imagem: 'product-4.jpg'
    },
    {
        id: 5,
        nome: 'CAMISETA HIGH POLO SPORT WHITE',
        preco: 169,
        imagem: 'product-5.jpg'
    },
    {
        id: 6,
        nome: 'CAMISETA HIGH "COMET" RED',
        preco: 139,
        imagem: 'product-6.jpg'
    }
];

for (produtoCatalogo of vetCatalogo) {
    const cardProduto =
        `<div id="card-produto">
    <img src="img/${produtoCatalogo.imagem}" alt="" style="height: 200px;">
        <p>${produtoCatalogo.nome}</p>
        <p>R$${produtoCatalogo.preco},90</p>
        <button>Adicionar ao carrinho</button>
</div>`;

document.getElementById("container-produto").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
};


