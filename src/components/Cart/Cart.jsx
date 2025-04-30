import React from 'react'
import estilos from './Cart.module.css';

const Cart = () => {


    function abrirCarrinho() {
        var sectionCarrinho = document.getElementById("carrinho");
        if (sectionCarrinho.style.display === "none") {
            sectionCarrinho.style.display = "block";
            // atualizarPrecoCarrinho();
        }
    }

    function fecharCarrinho() {
        var sectionCarrinho = document.getElementById("carrinho");
        sectionCarrinho.style.display = "none";
    }

    // renderizarCatalogo()
    // renderizarProdutosCarrinho();
    // atualizarPrecoCarrinho();
    // atualizarQtdProduto();
    // inicializarFiltros();

    return (
        <section id={estilos.carrinho} style={{ display: "none" }}>
            <div id={estilos.cabecalhoCarrinho}>
                <p>Carrinho</p>
                <button onclick="fecharCarrinho()" id={estilos.btnFecharCarrinho}>X</button>
            </div>
            <section id={estilos.conteudoCarrinho}>

            </section>
            <div id={estilos.detalhesCarrinho}>
                <p style={{ fontSize: "17px" }} id={estilos.precoCarrinho}></p>
                <button style={{ fontSize: "17px" }} class={estilos.botaoStyle}>FINALIZAR</button>
            </div>
        </section>)
}

export default Cart