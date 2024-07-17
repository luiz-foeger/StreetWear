
function abrirCarrinho() {
  var sectionCarrinho = document.getElementById("carrinho");
  if (sectionCarrinho.style.display === "none") {
    sectionCarrinho.style.display = "block";
        atualizarPrecoCarrinho();
  }
}

function fecharCarrinho() {
  var sectionCarrinho = document.getElementById("carrinho");
  sectionCarrinho.style.display = "none";
}
  
renderizarCatalogo()
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
atualizarQtdProduto();
inicializarFiltros();


// function adicionarAoCarrinho() {
//   alert("Produto Adicionado ao Carrinho!")
//   var sectionProduto = document.getElementById("conteudo-carrinho").value;

//   const produtoAdicionado = `<article>
//                 <img src="/img/camisetas/blusa-2.png" style="width: 120px;" alt="">
//                 <div id="info-conteudo-carrinho">
//                     <p>BLUSA "D ROSES" DIAMOND</p>
//                     <p>R$198,00</p>
//                 </div>
//                 <button onclick="" id="btn-fechar-carrinho"><i class="fa-solid fa-trash-can"></i></button>
//             </article>`

//   sectionProduto.innerHTML += produtoAdicionado;
// }




// var produto = document.getElementById("produto").value;
// var quantidade = document.getElementById("quantidade").value;
// var preco = document.getElementById("preco").value;
// var carrinho = document.getElementById("carrinho");
// var item = document.createElement("div");
// item.innerHTML = produto + " - " + quantidade + " x " + preco + " =
// " + (quantidade * preco);
// carrinho.appendChild(item);
// }