import { Link } from 'react-router-dom';

import estilos from '../components/ListaProdutos/ListaProdutos.module.css';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

import { sneakers } from '../data/products';

function Sneakers() {
  return (
    <div>
      <div className={estilos.indicadorPagina}>
        <span style={{ fontWeight: '300' }}>
          <Link style={{ fontWeight: '300' }} to="/">Produtos </Link>
          / Sneakers
        </span>
      </div>
      <ListaProdutos produtos={sneakers} />
    </div>
  );
}

export default Sneakers;
