import { useCarrinho } from '../../context/CarrinhoContext';
import estilos from './Cart.module.css';

import { IoBagRemove } from "react-icons/io5";

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
        <section className={estilos.carrinho}>
            {/* <h1>Minha Sacola</h1> */}
            {carrinho.length === 0 ? (
                <p>Carrinho vazio</p>
            ) : (
                <ul>
                    <button className={estilos.botao} style={{ width: '20%', right: '0' }} onClick={limparCarrinho}>Esvaziar Sacola</button>
                    {carrinho.map(item => (
                        <>
                            <section className={estilos.itemCarrinho}>
                                <li key={item.id} className={estilos.itemCard}>
                                    <div className={estilos.infoProduto}>
                                        <img src={item.imagem} alt={item.nome} width={80} className={estilos.imagemProduto} />
                                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                            <p className="nomeProduto">{item.nome}</p>
                                            <p className="precoProduto">R$ {Number(item.preco).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="nomeProduto">ID: {item.id}</p>
                                    </div>
                                    <div>
                                        <span>
                                            <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                                            <p>{item.quantidade}</p>
                                            <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                                        </span>
                                    </div>
                                    <p className="precoTotal">R$ {(Number(item.preco) * item.quantidade).toFixed(2)}</p>
                                </li>
                                <button className={estilos.icone} onClick={() => removerDoCarrinho(item.id)}><IoBagRemove /></button>
                            </section>
                        </>

                    ))}
                </ul>
            )}
            <h3>Total: R$ {Number(totalPreco).toFixed(2)}</h3>
            <button className={estilos.botao}>Finalizar Compra</button>
        </section>
    );
}

export default Carrinho;
