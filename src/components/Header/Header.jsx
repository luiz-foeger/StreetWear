import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

// Import Icons
import { RiArrowDownSLine } from "react-icons/ri";
import { IoBagHandle, IoMenu } from "react-icons/io5";

import estilos from './Header.module.css';

function Header() {
    const [rolado, setRolado] = useState(false);

    useEffect(() => {
        const aoRolar = () => {
            setRolado(window.scrollY > 50);
        };
        window.addEventListener("scroll", aoRolar);
        return () => window.removeEventListener("scroll", aoRolar);
    }, []);

    return (
        <header className={`${estilos.header} ${rolado ? estilos.rolado : ""}`}>
            <img to="/" className={estilos.logo} src="/assets/images/logos/logo.png" alt="Logo" />
            <nav className={estilos.nav}>
                <h3 className={estilos.menu}>
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
            <Link className={estilos.icone} to="/sacola"><IoBagHandle /></Link>
        </header>
    );
}

export default Header;
