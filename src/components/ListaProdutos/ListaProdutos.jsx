import estilos from './ListaProdutos.module.css';
import ProdutoCard from '../ProdutoCard/ProdutoCard';

function ListaProdutos() {
    const produtos = [
        {
            id: 1,
            imagem: '/assets/images/produtos/moletons/moletom-1.png',
            nome: 'THINK',
            preco: '44,90',
            marca: 'HIGH',
            descricao: 'CAMISETA',
        },
        {
            id: 2,
            imagem: '/assets/images/produtos/moletons/moletom-2.png',
            nome: 'RAZOR',
            preco: '44,90',
            marca: 'HIGH',
            descricao: 'CAMISETA',
        },
        {
            id: 3,
            imagem: '/assets/images/produtos/moletons/moletom-3.png',
            nome: 'CELLPHONE',
            preco: '179,90',
            marca: 'HIGH',
            descricao: 'CAMISETA',
        },
        {
            id: 4,
            imagem: '/assets/images/produtos/camisetas/camiseta-4.png',
            nome: 'GOLF',
            preco: '139,90',
            marca: 'HIGH',
            descricao: 'CAMISETA',
        },
        {
            id: 5,
            imagem: '/assets/images/produtos/camisetas/camiseta-5.png',
            nome: 'POLO SPORT',
            preco: '69,90',
            marca: 'HIGH',
            descricao: 'CAMISA',
        },
        {
            id: 6,
            imagem: '/assets/images/produtos/camisetas/camiseta-6.png',
            nome: 'COMET',
            preco: '139,90',
            marca: 'HIGH',
            descricao: 'CAMISETA',
        },
    ];

    return (
        <div className={estilos.lista}>
            {produtos.map(produto => (
                <ProdutoCard
                    id={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    preco={produto.preco}
                    marca={produto.marca}
                    descricao={produto.descricao}
                />
            ))}
        </div>
    );
}

export default ListaProdutos;
