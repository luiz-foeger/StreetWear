// CarrinhoContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState(() => {
    try {
      const carrinhoSalvo = localStorage.getItem('carrinho');
      return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    } catch (error) {
      console.error("Erro ao recuperar carrinho do localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    } catch (error) {
      console.error("Erro ao salvar carrinho no localStorage:", error);
    }
  }, [carrinho]);

  // ---------------------- FUNÇÕES PARA MANIPULAR CARRINHO ----------------------

  const adicionarAoCarrinho = (produto) => {

    const {
      id,
      nome = '',
      modelo = '',
      marca = '',
      imagem = '',
      preco = 0
    } = produto;

    if (!id) {
      console.error("Produto inválido: ID ausente", produto);
      return;
    }

    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find(item => item.id === id);
      if (itemExistente) {
        return prevCarrinho.map(item =>
          item.id === id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [
        ...prevCarrinho,
        {
          id,
          nome,
          modelo,
          marca,
          imagem,
          preco,
          quantidade: 1
        }
      ];
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.id !== id));
  };

  // ---------------------- FUNÇÕES DE QUANTIDADE ----------------------

  const aumentarQuantidade = (id) => {
    setCarrinho(prevCarrinho =>
      prevCarrinho.map(item =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const diminuirQuantidade = (id) => {
    setCarrinho(prevCarrinho =>
      prevCarrinho
        .map(item =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter(item => item.quantidade > 0)
    );
  };

  // ---------------------- FINALIZAÇÃO ----------------------

  const limparCarrinho = () => setCarrinho([]);
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  const totalPreco = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        limparCarrinho,
        totalItens,
        totalPreco,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

// ---------------------- HOOK CUSTOMIZADO ----------------------
export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }
  return context;
}