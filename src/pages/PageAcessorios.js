import { Link } from 'react-router-dom';

import estilos from '../components/ListaProdutos/ListaProdutos.module.css';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

import { accessories	 } from '../data/products';

function Acessorios() {
  return (
    <div>
      <div className={estilos.indicadorPagina}>
        <span style={{ fontWeight: '300' }}>  
          <Link  style={{ fontWeight: '300' }} to="/">Produtos </Link>
          / Acessórios
        </span>
      </div>
      <ListaProdutos produtos={accessories} />
    </div >
  );
}

export default Acessorios;
