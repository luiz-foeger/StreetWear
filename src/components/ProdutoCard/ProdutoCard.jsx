import { Link } from 'react-router-dom';
import { useCarrinho } from '../../context/CarrinhoContext';
import estilos from './ProdutoCard.module.css';

// import de icone de adição ao carrinho
import { IoBagAdd } from "react-icons/io5";



function ProdutoCard({ id, imagem, nome, preco, marca, modelo }) {
    const { adicionarAoCarrinho } = useCarrinho();

    return (
        // <Link to={`detalhes/produto/${descricao}/${id}`} className={estilos.link}>
        <div className={estilos.card}>
            <img src={imagem} alt={nome} className={estilos.imagem} />
            <h2 className={estilos.nome}>{modelo} {marca} {nome}</h2>
            <p className={estilos.preco}>R$ {preco}</p>
            <button className={estilos.icone} onClick={() => adicionarAoCarrinho({ id, imagem, nome, preco, marca, modelo })}>
                <IoBagAdd />
            </button>
        </div>
        // </Link>
    );
}

export default ProdutoCard;