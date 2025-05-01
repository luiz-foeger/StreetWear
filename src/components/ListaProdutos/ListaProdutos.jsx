import estilos from './ListaProdutos.module.css';
import ProdutoCard from '../ProdutoCard/ProdutoCard';

import { vetCamisetas } from './vetCatalogo.js';

function ListaProdutos() {
    return (
        <div className={estilos.lista}>
            {vetCamisetas.map(produto => (
                <ProdutoCard
                    id={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    preco={produto.preco}
                    marca={produto.marca}
                    modelo={produto.modelo}
                />
            ))}
        </div>
    );
}

export default ListaProdutos;
