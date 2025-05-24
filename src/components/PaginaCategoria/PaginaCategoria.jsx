import { useParams, Link } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { shirts, accessories, sneakers, skateItens } from '../../data/products';

import ListaProdutos from '../ListaProdutos/ListaProdutos';
import estilos from '../ListaProdutos/ListaProdutos.module.css';

function PaginaCategoria() {
    const { categoria } = useParams();

    const categorias = {
        camisetas: shirts,
        gorros: accessories,
        sneakers: sneakers,
        shapes: skateItens
    };

    const todosProdutos = categorias[categoria?.toLowerCase()] || [];

    // estados de filtro
    const [filtroMarca, setFiltroMarca] = useState('');
    const [filtroPreco, setFiltroPreco] = useState('');
    // const [filtroGenero, setFiltroGenero] = useState('');

    // Resetar filtros quando categoria mudar
    useEffect(() => {
        setFiltroMarca('');
        setFiltroPreco('');
        // setFiltroGenero('');
    }, [categoria]);

    const marcasUnicas = useMemo(() => [...new Set(todosProdutos.map(p => p.marca))], [todosProdutos]);
    // const generosUnicos = useMemo(() => [...new Set(todosProdutos.map(p => p.genero))], [todosProdutos]);

    const produtosFiltrados = todosProdutos.filter((produto) => {
        const porMarca = filtroMarca ? produto.marca === filtroMarca : true;
        // const porGenero = filtroGenero ? produto.genero === filtroGenero : true;
        const porPreco =
            filtroPreco === 'baixo' ? produto.preco < 100 :
                filtroPreco === 'medio' ? produto.preco >= 100 && produto.preco <= 300 :
                    filtroPreco === 'alto' ? produto.preco > 300 :
                        true;

        // return porMarca && porGenero && porPreco;
        return porMarca && porPreco;
    });


    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return (
        <div className={estilos.containerPagina}>
            <div className={estilos.cabecalhoFiltros}>
                <div className={estilos.indicadorPagina}>
                    <span style={{ fontWeight: '300' }}>
                        <Link style={{ fontWeight: '300' }} to="/">Home </Link>
                        / {capitalize(categoria)}
                    </span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <select value={filtroMarca} onChange={e => setFiltroMarca(e.target.value)}>
                        <option value="">Todas as Marcas</option>
                        {marcasUnicas.map((marca) => (
                            <option key={marca} value={marca}>{marca}</option>
                        ))}
                    </select>

                    {/* 
                <select value={filtroGenero} onChange={e => setFiltroGenero(e.target.value)}>
                    <option value="">Todos os Gêneros</option>
                    {generosUnicos.map((genero) => (
                        <option key={genero} value={genero}>{genero}</option>
                    ))}
                </select>
                */}

                    <select value={filtroPreco} onChange={e => setFiltroPreco(e.target.value)}>
                        <option value="">Todos os Preços</option>
                        <option value="baixo">Abaixo de R$100</option>
                        <option value="medio">R$100 a R$300</option>
                        <option value="alto">Acima de R$300</option>
                    </select>
                </div>
            </div>

            {produtosFiltrados.length === 0 ? (
                <div className={estilos.filtroVazio}>
                    <p>Nenhum produto encontrado com os filtros selecionados.</p>
                    {/* <button className={estilos.botao} onClick={() => window.location.reload()}>LIMPAR FILTROS</button> */}
                </div>
            ) : (
                <ListaProdutos key={categoria} produtos={produtosFiltrados} />
            )}
        </div>
    );
}

export default PaginaCategoria;
