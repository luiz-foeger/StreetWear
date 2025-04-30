import { Link } from 'react-router-dom';
import estilos from './ProdutoCard.module.css';
import { FaWhatsapp } from 'react-icons/fa';


function ProdutoCard({ id, imagem, nome, preco, marca, descricao }) {
    
    return (
        <Link to={`detalhes/produto/${descricao}/${id}`} className={estilos.link}>
            <div className={estilos.card}>
                <img src={imagem} alt={nome} className={estilos.imagem} />
                <h2 className={estilos.nome}>{descricao} {nome} {marca}</h2>
                <p className={estilos.preco}>R$ {preco}</p>
                {/* <button className={estilos.botaoContato}>
                    Adicionar <FaWhatsapp className={estilos.icone} />
                </button>
                <button className={estilos.botaoContato}>
                    Detalhes <FaWhatsapp className={estilos.icone} />
                </button> */}
            </div>
        </Link>
    );
}

export default ProdutoCard;

