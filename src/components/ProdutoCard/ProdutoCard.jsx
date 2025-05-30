    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    // import { useCarrinho } from '../../context/CarrinhoContext';
    // import { IoBagAdd } from "react-icons/io5";
    import estilos from './ProdutoCard.module.css';

    function ProdutoCard({ id, imagens = [], nome, preco, marca, modelo }) {
        // const { adicionarAoCarrinho } = useCarrinho();
        const [imagemCarregada, setImagemCarregada] = useState(false);

        const imagemPrincipal = imagens[0];
        const imagemSecundaria = imagens[1];

        return (
            <div className={estilos.card}>
                <Link to={`/detalhes/produto/${modelo.toLowerCase()}/${marca.toLowerCase()}/${id}`} className={estilos.link}>
                    <div className={estilos.imagemContainer}>
                        {!imagemCarregada && <div className={estilos.imagemLoading}></div>}

                        {imagemPrincipal && (
                            <img
                                src={imagemPrincipal}
                                alt={nome}
                                className={`${estilos.imagem} ${estilos.imagemPrincipal} ${imagemCarregada ? estilos.visivel : estilos.oculto}`}
                                onLoad={() => setImagemCarregada(true)}
                            />
                        )}

                        {imagemSecundaria && (
                            <img
                                src={imagemSecundaria}
                                alt={`${nome} secundária`}
                                className={`${estilos.imagem} ${estilos.imagemSecundaria}`}
                            />
                        )}
                    </div>
                    <h2 className={estilos.nome}>{modelo} {marca} {nome}</h2>
                    <p className={estilos.preco}>R$ {preco}</p>
                </Link>
            </div>
        );
    }


    export default ProdutoCard;
