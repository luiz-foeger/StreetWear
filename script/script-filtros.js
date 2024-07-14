const catalogoProdutos = document.getElementById("container-produtos");

function exibirTodos() {     // fetch('https://api-ecommerce-frontend.herokuapp.com/produtos')
    const camiseta = Array.from(catalogoProdutos.getElementsByClassName("camiseta"));
    const moletom = Array.from(catalogoProdutos.getElementsByClassName("moletom"));

    for (const produto of camiseta) {
        // produto.classList.remove("escondido");
        produto.style.display = "flex";
    }
    for (const produto of moletom) {
        // produto.classList.remove("escondido");
        produto.style.display = "flex";
        
    }
}

function mostrarMoletom() {
    const camiseta = Array.from(catalogoProdutos.getElementsByClassName("camiseta"));
    const moletom = Array.from(catalogoProdutos.getElementsByClassName("moletom"));

    for (const produto of camiseta) {
        // produto.classList.add("escondido");
        produto.style.display = "none";
    }
    for (const produto of moletom) {
        // produto.classList.remove("escondido");
        produto.style.display = "flex";
    }
}

function mostrarCamiseta() {
    const moletom = Array.from(catalogoProdutos.getElementsByClassName("moletom"));
    const camiseta = Array.from(catalogoProdutos.getElementsByClassName("camiseta"));

    for (const produto of moletom) {
        // produto.classList.add("escondido")
        produto.style.display = "none";
        
    }
    for (const produto of camiseta) {
        // produto.classList.remove("escondido");
        produto.style.display = "flex";
    }
}


// function filtrarPorModelo('modeloSelect') {
//     const produtos = document.querySelectorAll(input);

//     produtos.forEach((produto) => {
//         if (produto.classList.contains(modelo)) {
//             produto.style.display = 'block';
//         } else {
//             produto.style.display = 'none';
//         }
//     });
// }