import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCarrinho } from '../../context/CarrinhoContext';
import { vetCatalogo } from '../../data/products';
import { TfiClose } from "react-icons/tfi";

import Erro from '../404/Erro';

import estilos from './Detalhes.module.css';
import GaleriaProduto from '../Galeria/Galeria';

function ProdutoDetalhes() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const { id, modelo, marca } = useParams();
    const {
        // aumentarQuantidade,
        // diminuirQuantidade,
        // totalPreco,
        adicionarAoCarrinho,
    } = useCarrinho();

    const item = vetCatalogo.find(p =>
        p.id === id &&
        p.modelo.toLowerCase() === modelo &&
        p.marca.toLowerCase() === marca
    );

    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    if (!item) return <Erro />;

    let titulo = `${item.modelo} ${item.marca} ${item.nome}`;

    const descricoesPorModelo = {
        camiseta: "Camiseta 100% algodão com 270 g/m² \nModelagem Working Title \nArte em silk screen \nEtiquetas ",
        moletom: "Moletom 50% Algodão, \n 50% Poliéster \n Bordado / Embroidered Logo \n Etiquetas ",
        jaqueta: "Jaqueta 100% algodão \n Bordado / Embroidered Logo \n Etiquetas ",
        boné: "90% Poliéster, \n 10% Poliamida \n Arte em plastisol \n Etiquetas e metais ",
        gorro: "70% poliéster, \n 30% acrílico Team Model \n Tamanho único \n Etiquetas ",
        jorts: "Jeans 100% Algodão \n  Rebites personalizados \n Fechamento de botão e zíper YKK \n Etiquetas ",
        bermuda: "Shorts com ajuste atlético \n Elastic Waistband \n Etiquetas ",
        sneakers: "Material sintético de alta qualidade, solado antiderrapante, palmilha confortável, design moderno \n Colorway Original ",
        shape: "8.0” x 31.5” \n 14.25” Wheelbase \n DW Deep Concave \n 100% Canadian Maple ",
        lixa: "Tam. 33x9” \n Comprimento: 84cm \n Largura: 22,5cm \n Lixa de alta abrasão ",
    };

    const descricaoProduto = descricoesPorModelo[item.modelo.toLowerCase()] || "    ";

    return (
        <>
            <div className={estilos.indicadorPagina}>
                <span style={{ fontWeight: '300' }}>
                    <Link style={{ fontWeight: '300', color: '#5F5F5F', textDecoration: 'none' }} to="/">Home </Link>
                    /   <Link style={{ fontWeight: '300', color: '#5F5F5F', textDecoration: 'none' }} onClick={() => window.history.back()}>{capitalize(item.modelo)}s</Link> / {item.nome} {/* {capitalize(item.nome)} */}
                </span>
            </div>
            <div className={estilos.cardDetalhes}>

                <GaleriaProduto imagens={item.imagens} />

                <div className={estilos.detalhes}>
                    <h1>{titulo.toUpperCase()}</h1>
                    <h2>R$ {item.preco}</h2>

                    <h3>COMPOSIÇÃO</h3>
                    <p>{`${descricaoProduto}${item.marca}®`}</p>

                    <select id="select" className={estilos.select} name="select" required>
                        <option style={{ fontWeight: '200' }} value="selecionar" selected disabled>Tamanho</option>
                        <option style={{ fontWeight: '200' }} value="PP">PP</option>
                        <option style={{ fontWeight: '200' }} value="P">P</option>
                        <option style={{ fontWeight: '200' }} value="M">M</option>
                        <option style={{ fontWeight: '200' }} value="G">G</option>
                        <option style={{ fontWeight: '200' }} value="GG">GG</option>
                    </select>
                    <Link to="/sacola"><button className={estilos.botao} onClick={() => adicionarAoCarrinho(item)}>Adicionar ao Carrinho</button></Link>
                    <div className={estilos.inputDetalhes}>
                        <input type="text" placeholder='Digite seu CUPOM' />
                        <button onClick={() => alert('CUPOM NÃO ENCONTRADO!')}>CALCULAR</button>
                    </div>
                </div>
            </div>             {
                mostrarModal && (
                    <div className={estilos.modalOverlay} onClick={() => setMostrarModal(false)}>
                        <div className={estilos.modalContent} onClick={(e) => e.stopPropagation()}>
                            <div className={estilos.modalGaleria}>
                                {item.imagens?.map((src, index) => (
                                    <img key={index} className={estilos.modalImagem} src={src} alt={`${item.nome} ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                        <button className={estilos.botaoFechar} onClick={() => setMostrarModal(false)}><TfiClose /></button>
                    </div>
                )
            }
        </>
    );
}

export default ProdutoDetalhes;