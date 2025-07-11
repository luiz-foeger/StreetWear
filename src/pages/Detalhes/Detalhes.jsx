import estilos from './Detalhes.module.css';

import { Link, useParams } from 'react-router-dom';
import { useCarrinho } from '../../context/CarrinhoContext';
import { useState } from 'react';

import { vetCatalogo } from '../../data/products';
import { capitalize, descricoesPorModelo } from '../../data/utils';

import { TfiClose } from "react-icons/tfi";

import PaginaNaoEncontrada from '../NaoEncontrada/NaoEncontrada';
import SelectImagem from '../../components/produtos/SelectImagens/SelectImagens';
import ListaProdutos from '../../components/produtos/ListaProdutos/ListaProdutos'; // já existe no projeto
import Carrossel from '../../components/common/Carrossel/Carrossel';



function PaginaDetalhes() {
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
    ); if (!item) return <PaginaNaoEncontrada />;

    let titulo = `${item.modelo} ${item.marca} ${item.nome}`;
    const descricaoProduto = descricoesPorModelo[item.modelo.toLowerCase()] || "    ";

    const recomendados = vetCatalogo.filter(
        p => p.marca.toLowerCase() === item.marca.toLowerCase() && p.id !== item.id
    );

    return (
        <>
            <div className={estilos.indicadorPagina}>
                <span style={{ fontWeight: '300' }}>
                    <Link style={{ fontWeight: '300', color: '#5F5F5F', textDecoration: 'none' }} to="/">Home </Link>
                    /   <Link style={{ fontWeight: '300', color: '#5F5F5F', textDecoration: 'none' }} onClick={() => window.history.back()}>{capitalize(item.modelo)}s</Link> / {item.nome} {/* {capitalize(item.nome)} */}
                </span>
            </div>
            <div className={estilos.sectionDetalhes}>

                <SelectImagem imagens={item.imagens} />

                <div className={estilos.detalhesProduto}>
                    <h1 className={estilos.nomeProduto}>{titulo.toUpperCase()}</h1>
                    <h2 className={estilos.precoProduto}>R$ {item.preco}</h2>

                    <h3 className={estilos.composicao}>COMPOSIÇÃO</h3>
                    <p className={estilos.descricaoProduto}>{`${descricaoProduto}${item.marca}®`}</p>

                    <select id="select" className={estilos.select} name="select" required>
                        <option style={{ fontWeight: '200' }} value="selecionar" selected disabled>Tamanho</option>
                        <option style={{ fontWeight: '200' }} value="PP">PP</option>
                        <option style={{ fontWeight: '200' }} value="P">P</option>
                        <option style={{ fontWeight: '200' }} value="M">M</option>
                        <option style={{ fontWeight: '200' }} value="G">G</option>
                        <option style={{ fontWeight: '200' }} value="GG">GG</option>
                    </select>
                    <button className={estilos.botao} onClick={() => adicionarAoCarrinho(item)}>Adicionar ao Carrinho</button>
                    <div className={estilos.inputDetalhes}>
                        <input type="text" placeholder='Digite seu CUPOM' />
                        <button onClick={() => alert('CUPOM NÃO ENCONTRADO!')}>CALCULAR</button>
                    </div>
                </div>
            </div>
            {recomendados.length > 0 && (
                <div className={estilos.recomendados}>
                    <h3 className={estilos.tituloRecomendados}>Mais de {item.marca}®</h3>
                    {/* caso retorne apenas 3 produtos utilizar a ListaProdutos, caso seja mais de 4 usa o Carrossel: */}
                    {recomendados.length > 3 ? (
                        <Carrossel produtos={recomendados} />
                    ) : (
                        <ListaProdutos produtos={recomendados} />
                    )}
                </div>
            )}
        </>
    );
}

export default PaginaDetalhes;