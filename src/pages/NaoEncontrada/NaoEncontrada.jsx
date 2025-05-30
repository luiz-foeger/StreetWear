import estilos from './NaoEncontrada.module.css';

const PaginaNaoEncontrada = () => {
    return (
        <div className={estilos.error}>
            <h1>OPS! NÃO ENCONTRAMOS ESSA PÁGINA</h1>
            <p>
                A página que você está procurando pode estar em construção ou está temporariamente indisponível.
            </p>
            <div>
                <button className={estilos.botaoContato} onClick={() => window.history.back()}>Voltar</button>
            </div>
        </div>
    )
}

export default PaginaNaoEncontrada;