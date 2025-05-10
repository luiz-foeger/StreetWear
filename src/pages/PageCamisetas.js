import { Link } from 'react-router-dom';

import estilos from '../components/ListaProdutos/ListaProdutos.module.css';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

import { shirts } from '../data/products';

function Camisetas() {
  return (
    <div>
      <div className={estilos.indicadorPagina}>
        <span style={{ fontWeight: '300' }}>
          <Link style={{ fontWeight: '300' }} to="/">Produtos </Link>
          / Camisetas
        </span>
      </div>
      <ListaProdutos produtos={shirts} />
    </div>
  );
}

export default Camisetas;
