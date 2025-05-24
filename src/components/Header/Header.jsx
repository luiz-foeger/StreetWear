import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

// Import Icons
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";

// import { TfiClose } from "react-icons/tfi";

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
                            <Link to="#">Vestuários <RiArrowDownSLine /></Link>
                            <ul className={estilos.dropdownProdutos}>
                                <li><Link to="/produtos/camisetas">Camisetas</Link></li>
                                <li><Link to="/produtos/moletons">Moletons</Link></li>
                                <li><Link to="/produtos/bermudas">Bermudas / Shorts</Link></li>
                                <li><Link to="/produtos/sneakers">Calçados</Link></li>
                            </ul>
                        </div>

                        <div className={estilos.opcaoDropdown}>
                            <Link to="#">Acessórios <RiArrowDownSLine /></Link>
                            <ul className={estilos.dropdownProdutos}>
                                <li><Link to="/produtos/gorros">Gorros</Link></li>
                                <li><Link to="/produtos/bones">Bonés</Link></li>
                                <li><Link to="/produtos/bags">Bags</Link></li>
                            </ul>
                        </div>

                        <div className={estilos.opcaoDropdown}>
                            <Link to="#">Skate <RiArrowDownSLine /></Link>
                            <ul className={estilos.dropdownProdutos}>
                                <li><Link to="/produtos/shapes">Shapes</Link></li>
                                <li><Link to="/produtos/lixas">Lixas</Link></li>
                            </ul>
                        </div>

                        {/* <Link to="/produtos/sneakers">Calçados</Link> */}
                    </h3>
                </nav>

                <Link className={`${estilos.icone} ${rolado ? estilos.rolado : ""}`} to="/sacola"><HiOutlineShoppingBag /></Link>
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
