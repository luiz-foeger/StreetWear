import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import estilos from './Buttons.module.css';
const Buttons = () => {
    return (
        <>
            <>
                <section className={estilos.sectionButtons}>
                    <Link
                        to="/produtos/bones"
                        id="tipo-1"
                        className={estilos.bgAcessorios}
                    >
                        <span className={estilos.overlay}></span>
                        <div>
                            <p>Acessórios</p>
                            <h4>
                                Ver produtos <FaAngleRight />
                            </h4>
                        </div>
                    </Link>

                    <Link
                        to="/produtos/moletons"
                        id="tipo-1"
                        className={estilos.bgCamisetas}
                    >
                        <span className={estilos.overlay}></span>
                        <div>
                            <p>Jaquetas</p>
                            <h4>
                                Ver produtos <FaAngleRight />
                            </h4>
                        </div>
                    </Link>

                    <Link
                        to="/produtos/shorts"
                        id="tipo-1"
                        className={estilos.bgShorts}
                    >
                        <span className={estilos.overlay}></span>
                        <div>
                            <p>Shorts</p>
                            <h4>
                                Ver produtos <FaAngleRight />
                            </h4>
                        </div>
                    </Link>
                </section>
            </>
        </>
    )
}

export default Buttons;