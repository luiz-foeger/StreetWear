function abrirCarrinho() {
    var section = document.getElementById("carrinho");
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }


  function fecharCarrinho() {
  var section = document.getElementById("carrinho");
  section.style.display = "none";
}


