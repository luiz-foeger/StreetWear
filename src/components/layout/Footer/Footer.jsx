import estilos from './Footer.module.css';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaBehance } from 'react-icons/fa';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className={estilos.redesSociais}>
                <div>
                    <a target='_blank' href="https://instagram.com/luizfoeger"><FaInstagram /></a>
                </div>
                <div>
                    <a target='_blank' href="https://www.linkedin.com/in/luiz-foeger/"><FaLinkedin /></a>
                </div>
                <div>
                    <a target='_blank' href="https://github.com/luiz-foeger"><FaGithub /></a>
                </div>
                <div>
                    <a target='_blank' href="https://wa.me/5527997649105?text=Ol%C3%A1,%20Luiz!%20Encontrei%20seu%20perfil%20no%20GitHub%20e%20fiquei%20interessado%20no%20seu%20trabalho.%20Podemos%20conversar?"><FaWhatsapp /></a>
                </div>
                <div>
                    <a target='_blank' href="https://www.behance.net/plenta"><FaBehance /></a>
                </div>
            </div>
            <div className={estilos.linksFooter}>
                <div>
                    <ul>
                        <li className={estilos.titleUl}>Sobre Mim</li>
                        <li><a target='_blank' href="https://luizfoeger.vercel.app/">Meu Portfólio</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={estilos.titleUl}>Landing Pages</li>
                        <li><a target='_blank' href="https://ea-sports-fc.vercel.app/">EA SPORTS FC™ 24</a></li>
                        <li><a target='_blank' href="https://academia-equilibrio.vercel.app/">Academia Equilíbrio</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={estilos.titleUl}>Catálogos</li>
                        <li><a target='_blank' href="https://cinedev-project.vercel.app/">CineDev</a></li>
                        <li><a href="">Street&Wear</a></li>
                        <li><a target='_blank' href="https://montch.vercel.app/">Montch.br®</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={estilos.titleUl}>Contato</li>
                        <li><a href="mailto:foegerluiz@gmail.com">foegerluiz@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <p className={estilos.copyright}>© {currentYear} All rights reserved | Luiz Felipe Föeger dos Santos</p>
        </footer>
    );
}

export default Footer;