import { vetDecks } from '../data/vetCatalogo';
import { Link } from 'react-router-dom';

import estilos from '../components/ListaProdutos/ListaProdutos.module.css';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

function SkateItens() {
  return (
    <div>
      <div className={estilos.indicadorPagina}>
        <span style={{ fontWeight: '300' }}>
          <Link style={{ fontWeight: '300' }} to="/">Produtos </Link>
          / Skateboard
        </span>
      </div>
      <ListaProdutos produtos={vetDecks} />
    </div>
  );
}

export default SkateItens;
