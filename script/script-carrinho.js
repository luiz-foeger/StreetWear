function abrirCarrinho(){
    document.getElementById("carrinho").style.display = "block";
}

function fecharCarrinho(){
    document.getElementById("carrinho").style.display = "none";
    // document.getElementById("carrinho").style.display = "none";
    // document.getElementById("carrinho").classList.remove("ativo");
    // document.getElementById("carrinho").classList.toggle("ativo");
    // document.getElementById("carrinho").classList.add("ativo");
}

function modularCarrinho(){
    const btnFechar = document.getElementById("btn-fechar-carrinho");
    const btnAbrir = document.getElementById("btn-abrir-carrinho");

    btnFechar.addEventListener("click", fecharCarrinho);
    btnAbrir.getElementById("click", fecharCarrinho);
}