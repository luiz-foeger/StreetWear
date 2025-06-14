import estilos from './ListaProdutos.module.css';
import ProdutoCard from '../../produtos/ProdutoCard/ProdutoCard';

function ListaProdutos({ produtos }) {
    if (!produtos || !Array.isArray(produtos)) {
      return <p>Nenhum produto encontrado.</p>;
    }
  
    return (
      <div className={estilos.listagem}>
        {produtos.map(produto => (
          <ProdutoCard
            key={produto.id}
            id={produto.id}
            imagens={produto.imagens}
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
