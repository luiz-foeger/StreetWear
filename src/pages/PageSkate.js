import { Link } from 'react-router-dom';

import estilos from '../components/ListaProdutos/ListaProdutos.module.css';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

import { skateItens } from '../data/products';

function SkateItens() {
  return (
    <div>
      <div className={estilos.indicadorPagina}>
        <span style={{ fontWeight: '300' }}>
          <Link style={{ fontWeight: '300' }} to="/">Home </Link>
          / Skateboard
        </span>
      </div>
      <ListaProdutos produtos={skateItens} />
    </div>
  );
}

export default SkateItens;
