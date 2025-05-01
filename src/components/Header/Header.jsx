import { Link } from 'react-router-dom';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa"; 

import estilos from './Header.module.css';

function Header() {
    return (
        <header className={estilos.header}>
            <img to="/" className={estilos.logo} src="/assets/images/logos/logo.png" alt="Logo" />
            <nav className={estilos.nav}>
                <h3>
                    <Link to="/">Início</Link>

                    <div className={estilos.opcaoDropdown}>
                        <Link to="#">Produtos <RiArrowDownSLine /></Link>
                        <ul className={estilos.dropdownProdutos}>
                            <li><Link to="/produtos/acessorios" style={{ marginTop: "20px" }}>Acessórios</Link></li>
                            <li><Link to="/produtos/vestuario">Vestuário</Link></li>
                            <li><Link to="/produtos/sneakers">Sneakers</Link></li>
                            <li><Link to="/produtos/skateboard">Skate</Link></li>
                        </ul>
                    </div>

                    <Link to="/sobre-nos">Sobre</Link>
                </h3>
            </nav>
            <Link className={estilos.icone} to="/sacola"><FaShoppingBag /></Link>
        </header>
    );
}


export default Header;