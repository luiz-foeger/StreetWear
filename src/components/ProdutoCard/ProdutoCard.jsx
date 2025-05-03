import { Link } from 'react-router-dom';
import { useCarrinho } from '../../context/CarrinhoContext';
import { IoBagAdd } from "react-icons/io5";

import estilos from './ProdutoCard.module.css';

function ProdutoCard({ id, imagem, nome, preco, marca, modelo }) {
    const { adicionarAoCarrinho } = useCarrinho();

    return (
        <div className={estilos.card}>
            <Link to={`/detalhes/produto/${modelo.toLowerCase()}/${marca.toLowerCase()}/${id}`} className={estilos.link}>
                <img src={imagem} alt={nome} className={estilos.imagem} />
                <h2 className={estilos.nome}>{modelo} {marca} {nome}</h2>
                <p className={estilos.preco}>R$ {preco}</p>
            </Link>

            <button
                className={estilos.icone}
                onClick={() => adicionarAoCarrinho({ id, imagem, nome, preco, marca, modelo })}
            >
                <IoBagAdd />
            </button>
        </div>
    );
}

export default ProdutoCard;
