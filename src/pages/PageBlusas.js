import { Link } from 'react-router-dom';

import estilos from '../components/ListaProdutos/ListaProdutos.module.css';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

import { vetBlusas } from '../data/products';

function Blusas() {
  return (
    <div>
      <div className={estilos.indicadorPagina}>
        <span style={{ fontWeight: '300' }}>
          <Link style={{ fontWeight: '300' }} to="/">Produtos </Link>
          / Longsleeves
        </span>
      </div>
      <ListaProdutos produtos={vetBlusas} />
    </div>
  );
}

export default Blusas;
