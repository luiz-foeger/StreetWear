import { useCarrinho } from '../../context/CarrinhoContext';

function Carrinho() {
    const { carrinho, removerDoCarrinho, limparCarrinho } = useCarrinho();

    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <div>
            <h1>Seu Carrinho</h1>
            {carrinho.length === 0 ? (
                <p>Carrinho vazio</p>
            ) : (
                <ul>
                    {carrinho.map(item => (
                        <li key={item.id}>
                            <img src={item.imagem} alt={item.nome} width={80} />
                            <p>{item.nome}</p>
                            <p>R$ {item.preco} x {item.quantidade}</p>
                            <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <button onClick={limparCarrinho}>Limpar Carrinho</button>
        </div>
    );
}

export default Carrinho;