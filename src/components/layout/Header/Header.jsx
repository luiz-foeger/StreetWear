import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import estilos from './Header.module.css';

import AsideCarrinho from '../AsideCarrinho/AsideCarrinho';


function Header() {
    const [rolado, setRolado] = useState(false);
    const [mostrarAside, setMostrarAside] = useState(false);
    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

    const [categoriaExpandida, setCategoriaExpandida] = useState({
        vestuarios: false,
        acessorios: false,
        skate: false
    });

    useEffect(() => {
        const aoRolar = () => {
            setRolado(window.scrollY > 50);
        };
        window.addEventListener("scroll", aoRolar);
        return () => window.removeEventListener("scroll", aoRolar);
    }, []);

    const toggleCategoria = (categoria) => {
        setCategoriaExpandida(prev => ({ ...prev, [categoria]: !prev[categoria] }));
    };

    return (
        <>
            <header className={`${estilos.header} ${rolado ? estilos.rolado : ""}`}>
                <Link to="/" className={`${estilos.logo} ${estilos.divLogo}`}>
                    <img className={estilos.logo} src="https://res.cloudinary.com/dsmx8c5ug/image/upload/e_background_removal/f_png/v1748627055/logo-desktop_iqsl8x.png" alt="Logo" />
                </Link>

                {/* <button className={`${estilos.iconeMobile} ${rolado ? estilos.rolado : ""}`}><IoIosMenu onClick={() => setMostrarAside(!mostrarAside)} /></button> */}
                <button className={estilos.iconeMobile}><IoIosMenu onClick={() => setMostrarAside(!mostrarAside)} /></button>

                <Link to="/" className={estilos.logoMobile}>
                    <img className={estilos.logoMobile} src="https://res.cloudinary.com/dsmx8c5ug/image/upload/e_background_removal/f_png/v1748627046/logo-mobile_nc2mg9.png" alt="Logo" />
                </Link>

                <nav className={estilos.nav}>
                    <h3 className={estilos.navDesktop}>
                        <Link to="/">Início</Link>

                        <div className={estilos.opcaoDropdown}>
                            <Link to="#">Vestuários <RiArrowDownSLine /></Link>
                            <ul className={estilos.dropdownProdutos}>
                                <li><Link to="/produtos/camisetas">Camisetas</Link></li>
                                <li><Link to="/produtos/moletons">Moletons</Link></li>
                                <li><Link to="/produtos/shorts">Bermudas / Shorts</Link></li>
                                <li><Link to="/produtos/sneakers">Sneakers</Link></li>
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

                <aside className={`${estilos.menuAside} ${mostrarAside ? estilos.asideVisivel : ''}`}>

                    <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>Menu<button className={estilos.fecharAside} onClick={() => setMostrarAside(false)}><TfiClose /></button></h5>
                    <input className={estilos.inputBusca} type="text" placeholder="O que você busca?" />

                    <ul className={estilos.listaMenu}>
                        <li><Link to="/" onClick={() => setMostrarAside(false)}>INÍCIO</Link></li>

                        <li>
                            <button onClick={() => toggleCategoria('vestuarios')} className={estilos.categoriaExpandir}>
                                <span>VESTUÁRIOS</span> {categoriaExpandida.vestuarios ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                            </button>
                            <ul onClick={() => setMostrarAside(false)} className={`${estilos.submenu} ${categoriaExpandida.vestuarios ? estilos.expandir : ""}`}>
                                <li><Link to="/produtos/camisetas">CAMISETAS</Link></li>
                                <li><Link to="/produtos/moletons">MOLETONS</Link></li>
                                <li><Link to="/produtos/shorts">BERMUDAS / SHORTS</Link></li>
                                <li><Link to="/produtos/sneakers">SNEAKERS</Link></li>
                            </ul>
                        </li>

                        <li>
                            <button onClick={() => toggleCategoria('acessorios')} className={estilos.categoriaExpandir}>
                                <span>ACESSÓRIOS</span> {categoriaExpandida.acessorios ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                            </button>
                            <ul onClick={() => setMostrarAside(false)} className={`${estilos.submenu} ${categoriaExpandida.acessorios ? estilos.expandir : ""}`}>
                                <li><Link to="/produtos/gorros">GORROS</Link></li>
                                <li><Link to="/produtos/bones">BONÉS</Link></li>
                                <li><Link to="/produtos/bags">BAGS</Link></li>
                            </ul>
                        </li>

                        <li>
                            <button onClick={() => toggleCategoria('skate')} className={estilos.categoriaExpandir}>
                                <span>SKATE</span> {categoriaExpandida.skate ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                            </button>
                            <ul onClick={() => setMostrarAside(false)} className={`${estilos.submenu} ${categoriaExpandida.skate ? estilos.expandir : ""}`}>
                                <li><Link to="/produtos/shapes">SHAPES</Link></li>
                                <li><Link to="/produtos/lixas">LIXAS</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/sobre" onClick={() => setMostrarAside(false)}>SOBRE</Link></li>
                        <li><Link to="/login" onClick={() => setMostrarAside(false)}>ENTRAR</Link></li>
                    </ul>
                </aside>

                {/* <Link className={`${estilos.icone} ${rolado ? estilos.rolado : ""}`} to="/sacola"> */}
                {/* <Link className={estilos.icone} to="/sacola">
                    <HiOutlineShoppingBag />
                </Link> */}
                <button className={estilos.icone} onClick={() => setMostrarCarrinho(true)}>
                    <HiOutlineShoppingBag />
                </button>
                <AsideCarrinho aberto={mostrarCarrinho} onFechar={() => setMostrarCarrinho(false)} />

            </header>
        </>
    );
}

export default Header;