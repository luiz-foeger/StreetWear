import estilos from './ProdutoCard.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProdutoCard({ id, imagens = [], nome, preco, marca, modelo }) {
    const [imagemCarregada, setImagemCarregada] = useState(false);

    const imagemPrincipal = imagens[0];
    const imagemSecundaria = imagens[1];

    return (
        <div className={estilos.cardProduto}>
            <Link to={`/detalhes/produto/${modelo.toLowerCase()}/${marca.toLowerCase()}/${id}`}>
                <div className={estilos.imagemContainer}>
                    {!imagemCarregada &&
                        <div className={estilos.imagemLoading}></div>
                    }{imagemPrincipal && (
                        <img
                            src={imagemPrincipal}
                            alt={nome}
                            className={`${estilos.imagemProduto} ${estilos.imagemPrincipal} ${imagemCarregada ? estilos.imagemVisivel : estilos.imagemOculta}`}
                            onLoad={() => setImagemCarregada(true)}
                        />
                    )}{imagemSecundaria && (
                        <img
                            src={imagemSecundaria}
                            alt={`${nome} secundária`}
                            className={`${estilos.imagemProduto} ${estilos.imagemSecundaria}`}
                        />
                    )}

                </div>

                <h2 className={estilos.nomeProduto}>{modelo} {marca} {nome}</h2>
                <p className={estilos.precoProduto}>R$ {preco}</p>

            </Link>
        </div>
    );
}

export default ProdutoCard;