const vetCatalogo = [
    {
        id: 1,
        nome: 'SHAPE "ROADSTER" PRIMITIVE',
        preco: 283,
        imagem: 'deck-1.png'
    },
    {
        id: 2,
        nome: 'SHAPE "FOREVER TEAM" PRIMITIVE',
        preco: 283,
        imagem: 'deck-2.png'
    },
    {
        id: 3,
        nome: 'SHAPE "THIS WAY" DEATHWISH',
        preco: 271,
        imagem: 'deck-3.png'
    },
    {
        id: 4,
        nome: 'SHAPE "M. INFERNO" CREATURE',
        preco: 298,
        imagem: 'deck-4.png'
    },
    {
        id: 5,
        nome: 'SHAPE "CATACOMB" CREATURE',
        preco: 242,
        imagem: 'deck-5.png'
    },
    {
        id: 6,
        nome: 'SHAPE "AP OG LOGO" APRIL',
        preco: 275,
        imagem: 'deck-6.png'
    },
    {
        id: 7,
        nome: 'SHAPE "JEANNE" HOCKEY',
        preco: 275,
        imagem: 'deck-7.png'
    },
    {
        id: 8,
        nome: 'SHAPE "PREDICTIONS" FUCKING AWESOME',
        preco: 289,
        imagem: 'deck-8.png'
    },
    {
        id: 9,
        nome: 'LIXA ULTRAGRIP JESSUP',
        preco: 89,
        imagem: 'lixa-1.png'
    },
    {
        id: 10,
        nome: 'LIXA "OG SPRAY" SHAKE JUNT',
        preco: 189,
        imagem: 'lixa-2.png'
    },
    {
        id: 11,
        nome: 'LIXA "STAMP PRINT" GRIZZLY',
        preco: 189,
        imagem: 'lixa-3.png'
    },
    {
        id: 12,
        nome: 'LIXA "BIGHEAD INFERNO" SPITFIRE',
        preco: 199,
        imagem: 'lixa-4.png'
    }
];

for (produtoCatalogo of vetCatalogo) {
    const cardProduto =
        `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
    <img src="../img/decks/${produtoCatalogo.imagem}" alt="">
        <p>${produtoCatalogo.nome}</p>
        <p id="paragrafo-preco">R$${produtoCatalogo.preco},00</p>
        <button onclick="abrirCarrinho()" id='adicionar-${produtoCatalogo.id}' <i class="fa-solid fa-cart-plus botao-style" style="font-family=serif;"></i></button>
</div>`;

    document.getElementById("container-produtos").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
};

