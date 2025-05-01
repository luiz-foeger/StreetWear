import { vetCamisetas } from '../data/vetCatalogo';
import { Link } from 'react-router-dom';

import estilos from '../components/ListaProdutos/ListaProdutos.module.css';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

function Camisetas() {
  return (
    <div>
      <div className={estilos.indicadorPagina}>
        <span style={{ fontWeight: '300' }}>
          <Link style={{ fontWeight: '300' }} to="/">Produtos </Link>
          / Camisetas
        </span>
      </div>
      <ListaProdutos produtos={vetCamisetas} />
    </div>
  );
}

export default Camisetas;
