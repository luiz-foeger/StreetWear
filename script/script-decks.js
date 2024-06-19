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


];

for (produtoCatalogo of vetCatalogo) {
    const cardProduto =
        `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
    <img src="../img/decks/${produtoCatalogo.imagem}" alt="">
        <p>${produtoCatalogo.nome}</p>
        <p id="paragrafo-preco">R$${produtoCatalogo.preco},90</p>
        <button class="botao-style">ADICIONAR</button>
</div>`;

    document.getElementById("container-produtos").innerHTML += cardProduto; //innerHTML -> ver o html dentro do elemento
};

