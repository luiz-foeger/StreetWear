import estilos from './ListaProdutos.module.css';
import ProdutoCard from '../ProdutoCard/ProdutoCard';

function ListaProdutos({ produtos }) {
    if (!produtos || !Array.isArray(produtos)) {
      return <p>Nenhum produto encontrado.</p>;
    }
  
    return (
      <div className={estilos.lista}>
        {produtos.map(produto => (
          <ProdutoCard
            key={produto.id}
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
