import { vetSneakers } from '../data/vetCatalogo';
import { Link } from 'react-router-dom';

import estilos from '../components/ListaProdutos/ListaProdutos.module.css';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

function Sneakers() {
  return (
    <div>
      <div className={estilos.indicadorPagina}>
        <span style={{ fontWeight: '300' }}>
          <Link style={{ fontWeight: '300' }} to="/">Produtos </Link>
          / Sneakers
        </span>
      </div>
      <ListaProdutos produtos={vetSneakers} />
    </div>
  );
}

export default Sneakers;
