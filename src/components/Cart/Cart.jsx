import { Link } from 'react-router-dom';
import { IoBagRemove } from "react-icons/io5";

import { useCarrinho } from '../../context/CarrinhoContext';

import estilos from './Cart.module.css';

function Carrinho() {
    const {
        carrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerDoCarrinho,
        limparCarrinho,
        totalPreco,
    } = useCarrinho();

    if (carrinho.length === 0)
        return <div className={estilos.carrinhoVazio}>
            <p>Sua sacola está vazia!</p>
            <div>
                <button className={estilos.botao} onClick={() => window.history.back()}>RETORNAR PARA A LOJA</button>
            </div>
        </div>;


    return (
        <>
            <div className={estilos.indicadorPagina}>
                <span style={{ fontWeight: '300' }}>
                    <Link style={{ fontWeight: '300' }} to="/">Minha Sacola </Link>
                    /
                </span>
            </div>
            <section className={estilos.carrinho}>
                {carrinho.length === 0 ? (
                    <p>Carrinho vazio</p>
                ) : (
                    <>
                        <ul>
                            {carrinho.map(item => (
                                <>
                                    <section className={estilos.itemCarrinho}>
                                        <li key={item.id} className={estilos.itemCard}>
                                            <div className={estilos.infoProduto}>
                                                <img src={item.imagem} alt={item.nome} width={80} className={estilos.imagemProduto} />
                                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                                    <p style={{ fontWeight: '200' }}>{item.modelo} {item.nome}</p>
                                                    <p style={{ fontWeight: '200', color: '#000000bf' }}>{item.marca}</p>
                                                    <p style={{ fontWeight: '200', color: '#000000bf' }}>R$ {Number(item.preco).toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>ID: {item.id}</p>
                                            </div>
                                            <div>
                                                <div className={estilos.qtdProduto}>
                                                    <button className={estilos.botaoQuantidade} style={{ borderRadius: '8px 0 0 8px' }} onClick={() => diminuirQuantidade(item.id)}>-</button>
                                                    <p className={estilos.botaoQuantidade}>{item.quantidade}</p>
                                                    <button className={estilos.botaoQuantidade} style={{ borderRadius: '0 8px 8px 0' }} onClick={() => aumentarQuantidade(item.id)}>+</button>
                                                </div>
                                            </div>
                                            <p className={estilos.precoTotal} style={{ fontWeight: '200' }}>R$ {(Number(item.preco) * item.quantidade).toFixed(2)}</p>
                                        </li>
                                        <button className={estilos.icone} onClick={() => removerDoCarrinho(item.id)}><IoBagRemove /></button>
                                    </section>
                                </>

                            ))}
                            <button className={estilos.botao} style={{ width: '20%', margin: '5px 0 0 10px' }} onClick={limparCarrinho}>Esvaziar Sacola</button>
                        </ul>
                    </>
                )}
                <h3>Total: R$ {Number(totalPreco).toFixed(2)}</h3>
                <button className={estilos.botao}>Finalizar Compra</button>
            </section >
        </>
    );
}

export default Carrinho;
