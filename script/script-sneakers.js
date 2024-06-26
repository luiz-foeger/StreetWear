const vetCatalogo = [
    {
        id: 1,
        nome: 'NIKE "LX WHITE" BLAZER MID 77',
        preco: 384,
        imagem: 'sneaker-1.png'
    },
    {
        id: 2,
        nome: 'NIKE "ORANGE MARINE" DUNK LOW SP',
        preco: 461,
        imagem: 'sneaker-2.png'
    },
    {
        id: 3,
        nome: 'ÖUS IMIGRANTE NOTÓRIO',
        preco: 297,
        imagem: 'skate-1.png'
    },
    {
        id: 4,
        nome: 'SÖUSA NBA NY KNICKS ',
        preco: 629,
        imagem: 'sneaker-3.png'
    },
    {
        id: 5,
        nome: 'TESLA COIL WHITE PURPLE',
        preco: 410,
        imagem: 'skate-2.png'
    },
    {
        id: 6,
        nome: 'DC SHOES CONSTRUCT IMP',
        preco: 379,
        imagem: 'sneaker-4.png'
    },
    {
        id: 7,
        nome: 'DC SHOES KALYNX ZERO IMP',
        preco: 350,
        imagem: 'sneaker-5.png'
    },
    {
        id: 8,
        nome: 'DC X THRASHER TRUTH',
        preco: 529,
        imagem: 'sneaker-6.png'
    },
    {
        id: 9,
        nome: 'ADIDAS FORUM LOW',
        preco: 439,
        imagem: 'sneaker-7.png'
    },
    {
        id: 10,
        nome: 'REBOOK X BAW "REVENGE" CLUB C',
        preco: 679,
        imagem: 'sneaker-8.png'
    }
];

for (produtoCatalogo of vetCatalogo) {
    const cardProduto =
        `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
    <img src="../img/sneakers/${produtoCatalogo.imagem}" alt="">
        <p>${produtoCatalogo.nome}</p>
        <p id="paragrafo-preco">R$${produtoCatalogo.preco},90</p>
        <button class="botao-style">ADICIONAR</button>
</div>`;

    document.getElementById("container-produtos").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
};

