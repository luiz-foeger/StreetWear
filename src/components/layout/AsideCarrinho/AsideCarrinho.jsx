import estilos from './AsideCarrinho.module.css';
import { useCarrinho } from '../../../context/CarrinhoContext';
import { Link } from 'react-router-dom';
import { TbTrashX } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";

export default function AsideCarrinho({ aberto, onFechar }) {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
    limparCarrinho,
    totalPreco,
  } = useCarrinho();

  return (
    <aside className={`${estilos.asideCarrinho} ${aberto ? estilos.visivel : ''}`}>
      <div className={estilos.cabecalho}>
        <h5 style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>Minha Sacola<button className={estilos.fecharAside} onClick={onFechar}><TfiClose /></button></h5>
      </div>
      <div className={estilos.conteudo}>
        {carrinho.length === 0 ? (
          <p>Sua sacola está vazia!</p>
        ) : (
          <>
            {carrinho.map(item => (
              <div key={item.id} className={estilos.itemCard}>
                <Link to={`/detalhes/produto/${(item.modelo || '').toLowerCase()}/${(item.marca || '').toLowerCase()}/${item.id}`}>
                  <img src={item.imagens?.[0]} alt={item.nome} className={estilos.imagemProduto} />
                </Link>
                <div className={estilos.info}>
                  <p style={{ fontWeight: '200' }}>{item.modelo} {item.nome}</p>

                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontWeight: '200', color: '#000000bf' }}>{item.marca}</p>
                    <p style={{ fontWeight: '200', color: '#000000bf' }}>R$ {(Number(item.preco) * item.quantidade)}</p>
                  </div>

                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className={estilos.qtdProduto}>
                      <button className={estilos.botaoQuantidade} style={{ borderRadius: '8px 0 0 8px' }} onClick={() => diminuirQuantidade(item.id)}>
                        -
                      </button>
                      <p className={estilos.botaoQuantidade}>{item.quantidade}</p>

                      <button className={estilos.botaoQuantidade} style={{ borderRadius: '0 8px 8px 0' }} onClick={() => aumentarQuantidade(item.id)}>
                        +
                      </button>
                    </div>
                    <button className={estilos.icone} onClick={() => removerDoCarrinho(item.id)}>
                      <TbTrashX />
                    </button>
                  </div>

                  <div>

                  </div>

                </div>
              </div>
            ))}
            <div className={estilos.rodape}>
              <button className={estilos.botaoEsvaziar} onClick={limparCarrinho}>
                Esvaziar Sacola
              </button>
              <div className={estilos.total}>
                <strong>Total: R$ {Number(totalPreco).toFixed(2)}</strong>
              </div>
              <button className={estilos.botaoFinalizar}>
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}