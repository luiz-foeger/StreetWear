import { Link } from 'react-router-dom';
import estilos from './Buttons.module.css';

const Buttons = () => {
    return (
        <div className={estilos.sectionButtons}>
            <ul className={estilos.buttons}>
                <li><Link to="/produtos/acessorios">Acessórios</Link></li>
                <li><Link to="/produtos/vestuario/camisetas">Camisetas</Link></li>
                <li><Link to="/produtos/sneakers">Sneakers</Link></li>
                <li><Link to="/produtos/skateboard/decks">Decks</Link></li>
            </ul>
        </div>
    )
}

export default Buttons;