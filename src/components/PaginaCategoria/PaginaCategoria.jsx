import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { TfiClose } from "react-icons/tfi";
import { shirts, accessories, sneakers, skateItens } from '../../data/products';

import ListaProdutos from '../ListaProdutos/ListaProdutos';
import estilos from '../ListaProdutos/ListaProdutos.module.css';

function PaginaCategoria() {
    const { categoria } = useParams();
    const categorias = { camisetas: shirts, gorros: accessories, sneakers: sneakers, shapes: skateItens };
    const todosProdutos = categorias[categoria?.toLowerCase()] || [];

    // Estados de filtro
    const [filtroMarca, setFiltroMarca] = useState('');
    const [filtroPrecoMin, setFiltroPrecoMin] = useState(39);
    const [filtroPrecoMax, setFiltroPrecoMax] = useState(599);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    // Verifica se a categoria é válida
    useEffect(() => {
        setFiltroMarca('');
        setFiltroPrecoMin(39);
        setFiltroPrecoMax(599);
    }, [categoria]);

    // Obter marcas únicas para o filtro ("useMemo" para otimizar o desempenho)
    const marcasUnicas = useMemo(() => [...new Set(todosProdutos.map(p => p.marca))], [todosProdutos]);

    // Filtrar produtos com base nos filtros selecionados
    const produtosFiltrados = todosProdutos.filter((produto) => {
        const porMarca = filtroMarca ? produto.marca === filtroMarca : true;
        const porPreco = produto.preco >= filtroPrecoMin && produto.preco <= filtroPrecoMax;
        return porMarca && porPreco;
    });

    // Limpar os filtros e retornar aos valores padrão
    function limparFiltros() {
        setFiltroMarca('');
        setFiltroPrecoMin(39);
        setFiltroPrecoMax(599);
    }

    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return (
        <div className={estilos.containerPagina}>
            <div className={estilos.cabecalhoFiltros}>
                <div className={estilos.indicadorPagina}>
                    <span style={{ fontWeight: '300' }}>
                        <Link style={{ fontWeight: '300' }} to="/">Home </Link> / {capitalize(categoria)}
                    </span>
                </div>
                <button className={estilos.botaoFiltrar} onClick={() => setMostrarFiltros(!mostrarFiltros)} style={{ height: '100%' }}>
                    FILTRAR
                </button>
            </div>

            <aside className={`${estilos.filtrosAside} ${mostrarFiltros ? estilos.filtrosVisivel : ''}`}>

                <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>Filtros<button className={estilos.fecharAside} onClick={() => setMostrarFiltros(false)}><TfiClose /></button></h5>
                <select value={filtroMarca} onChange={e => setFiltroMarca(e.target.value)}>
                    <option value="">Todas as Marcas</option>
                    {marcasUnicas.map((marca) => (
                        <option key={marca} value={marca} >{marca}</option>
                    ))}
                </select>
                <label>Preço Mínimo: R$ {filtroPrecoMin}</label>
                <input type="range" min="39" max="599" value={filtroPrecoMin} onChange={e => setFiltroPrecoMin(Number(e.target.value))} />
                <label>Preço Máximo: R$ {filtroPrecoMax}</label>
                <input type="range" min="39" max="599" value={filtroPrecoMax} onChange={e => setFiltroPrecoMax(Number(e.target.value))} />
                <button className={estilos.botaoLimpar} onClick={limparFiltros}>Limpar Filtros</button>
            </aside>

            {produtosFiltrados.length === 0 ? (
                <div className={estilos.filtroVazio}>
                    <p>Nenhum produto encontrado com os filtros selecionados.</p>
                </div>
            ) : (
                <ListaProdutos key={categoria} produtos={produtosFiltrados} />
            )}
        </div>
    );
}

export default PaginaCategoria;