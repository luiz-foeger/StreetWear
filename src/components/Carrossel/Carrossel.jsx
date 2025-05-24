import React, { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ProdutoCard from '../ProdutoCard/ProdutoCard';
import estilos from './Carrossel.module.css';

function Carrossel({ titulo, produtos = [], linkVerTudo = "#" }) {
    const carrosselRef = useRef(null);

    const scrollCarrossel = (direcao) => {
        const container = carrosselRef.current;
        const scrollAmount = container.offsetWidth * 0.8;
        container.scrollBy({ left: direcao === 'esquerda' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    return (
        <>
            <nav className={estilos.nav}>
                {/* <h2 className={estilos.titulo}>{titulo}</h2> */}
                <a href={linkVerTudo} className={estilos.verTudo}>Ver tudo</a>
            </nav>

            <div className={estilos.containerCarrossel}>
                <button className={estilos.setaEsquerda} onClick={() => scrollCarrossel('esquerda')}>
                    <SlArrowLeft />
                </button>

                <div className={estilos.carrossel} ref={carrosselRef}>
                    {produtos.map(produto => (
                        <ProdutoCard
                            key={produto.id}
                            id={produto.id}
                            imagem={produto.imagem}
                            nome={produto.nome}
                            preco={produto.preco}
                            marca={produto.marca}
                            modelo={produto.modelo}
                        />
                    ))}
                </div>

                <button className={estilos.setaDireita} onClick={() => scrollCarrossel('direita')}>
                    <SlArrowRight />
                </button>
            </div>
        </>
    );
}

export default Carrossel;
