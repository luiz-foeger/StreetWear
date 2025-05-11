import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

// Import Icons
import { RiArrowDownSLine } from "react-icons/ri";
import { IoBagHandle, IoMenu } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";

import estilos from './Header.module.css';

function Header() {
    const [rolado, setRolado] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        const aoRolar = () => {
            setRolado(window.scrollY > 50);
        };
        window.addEventListener("scroll", aoRolar);
        return () => window.removeEventListener("scroll", aoRolar);
    }, []);

    return (
        <>
            <header className={`${estilos.header} ${rolado ? estilos.rolado : ""}`}>
                <Link to="/" className={`${estilos.logo} ${estilos.divLogo}`}><img className={estilos.logo} src="/assets/images/logos/logo.png" alt="Logo" /></Link>

                <Link className={`${estilos.iconeMobile} ${rolado ? estilos.rolado : ""}`}><IoMenu onClick={() => setMostrarModal(true)} /></Link>
                <Link to="/" className={estilos.logoMobile}><img className={estilos.logoMobile} src="/assets/images/logos/logo2.png" alt="Logo" /></Link>


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

                <Link className={`${estilos.icone} ${rolado ? estilos.rolado : ""}`} to="/sacola"><IoBagHandle /></Link>
            </header>
            {
                mostrarModal && (
                    <div className={estilos.menuOverlay} onClick={() => setMostrarModal(false)}>
                        <div className={estilos.menuContent} onClick={(e) => e.stopPropagation()}>
                            <ul onClick={() => setMostrarModal(false)}>
                                <li><Link to="/">Início</Link></li>
                                <li><Link to="/produtos/acessorios">Acessórios</Link></li>
                                <li><Link to="/produtos/vestuario">Vestuário</Link></li>
                                <li><Link to="/produtos/sneakers">Sneakers</Link></li>
                                <li><Link to="/produtos/skateboard">Skate</Link></li>
                            </ul>
                        </div>
                        {/* <button className={estilos.botaoFechar} onClick={() => setMostrarModal(false)}>Fechar</button> */}
                    </div>
                )
            }
        </>
    );
}

export default Header;
