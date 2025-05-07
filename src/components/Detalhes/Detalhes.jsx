import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCarrinho } from '../../context/CarrinhoContext';
import { vetCatalogo } from '../../data/vetCatalogo';

import Erro from '../404/Erro';

import estilos from './Detalhes.module.css';

function ProdutoDetalhes() {
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

    return (
        <>
            <div className={estilos.indicadorPagina}>
                <span style={{ fontWeight: '300' }}>
                    <Link style={{ fontWeight: '300', color: '#5F5F5F', textDecoration: 'none' }} to="/">Produtos </Link>
                    /   <Link style={{ fontWeight: '300', color: '#5F5F5F', textDecoration: 'none' }} onClick={() => window.history.back()}>{capitalize(item.modelo)}s</Link> / {item.nome} {/* {capitalize(item.nome)} */}
                </span>
            </div>
            <div className={estilos.cardDetalhes}>
                <img src={item.imagem} alt={item.nome} />
                <div className={estilos.detalhes}>
                    <h1>{item.modelo} {item.marca} {item.nome}</h1>
                    <h2>R$ {item.preco}</h2>
                    <h3>COMPOSIÇÃO</h3>
                    <p>{capitalize(item.modelo)} 100% algodão com 270 g/m² <br />
                        Modelagem Working Title  <br />
                        Arte em silk screen <br />
                        Etiquetas {item.marca}®</p>
                    <select id="select" className={estilos.select} name="select" required>
                        <option style={{ fontWeight: '200' }} value="selecionar" selected disabled>Tamanho</option>
                        <option style={{ fontWeight: '200' }} value="PP">PP</option>
                        <option style={{ fontWeight: '200' }} value="P">P</option>
                        <option style={{ fontWeight: '200' }} value="M">M</option>
                        <option style={{ fontWeight: '200' }} value="G">G</option>
                        <option style={{ fontWeight: '200' }} value="GG">GG</option>
                    </select>
                    <Link to="/sacola"><button className={estilos.botao} onClick={() => adicionarAoCarrinho(item)}>Adicionar ao Carrinho</button></Link>
                    <div>
                        <input type="text" placeholder='Digite seu CUPOM' />
                        <button onClick={() => alert('CUPOM NÃO ENCONTRADO!')}>CALCULAR</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProdutoDetalhes;