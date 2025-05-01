import { Link } from 'react-router-dom';
import { useCarrinho } from '../../context/CarrinhoContext';
import estilos from './ProdutoCard.module.css';

function ProdutoCard({ id, imagem, nome, preco, marca, descricao }) {
    const { adicionarAoCarrinho } = useCarrinho();

    return (
        // <Link to={`detalhes/produto/${descricao}/${id}`} className={estilos.link}>
        <div className={estilos.card}>
            <img src={imagem} alt={nome} className={estilos.imagem} />
            <h2 className={estilos.nome}>{descricao} {nome} {marca}</h2>
            <p className={estilos.preco}>R$ {preco}</p>
            <button onClick={() => adicionarAoCarrinho({ id, nome, preco, imagem })}>
                Adicionar ao Carrinho
            </button>
        </div>
        // </Link>
    );
}

export default ProdutoCard;