import React, { useEffect, useState } from "react";

import { AlterarStatusButton } from "../Styles/MainBackOffice.styles.js";

import {
  ProdutoTable,
  ProdutoTh,
  ProdutoTd,
  Pagination,
  PaginationButton,
  PaginationItem,
} from "../Styles/ListaProdutos.styles.js";

function Tabela() {
  const produtos = [
    { nome: "teste0", codigo: 0, estoque: 1, preco: 10.99, status: "inativo" },
    { nome: "teste1", codigo: 1, estoque: 1, preco: 10.99, status: "inativo" },
    { nome: "teste2", codigo: 2, estoque: 5, preco: 20.0, status: "ativo" },
    { nome: "teste3", codigo: 3, estoque: 21, preco: 12.99, status: "ativo" },
    { nome: "teste4", codigo: 4, estoque: 23, preco: 15.99, status: "ativo" },
    { nome: "teste5", codigo: 5, estoque: 42, preco: 6.99, status: "inativo" },
    { nome: "teste6", codigo: 6, estoque: 29, preco: 19.9, status: "ativo" },
    { nome: "teste7", codigo: 7, estoque: 8, preco: 23.5, status: "ativo" },
    { nome: "teste8", codigo: 8, estoque: 3, preco: 40.2, status: "ativo" },
    { nome: "teste9", codigo: 9, estoque: 15, preco: 30.45, status: "inativo" },
    { nome: "teste10", codigo: 10, estoque: 18, preco: 50.0, status: "ativo" },
    {
      nome: "teste11",
      codigo: 11,
      estoque: 31,
      preco: 32.8,
      status: "inativo",
    },
    {
      nome: "teste12",
      codigo: 12,
      estoque: 30,
      preco: 21.75,
      status: "inativo",
    },
    { nome: "teste13", codigo: 13, estoque: 11, preco: 14.5, status: "ativo" },
  ];

  const [products, setProducts] = useState([]);
  const [total] = useState(produtos.length);
  const [limite] = useState(10);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    function loadProdutos() {
      const totalPages = Math.ceil(total / limite);
      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }
      setPages(arrayPages);

      const startIndex = (currentPage - 1) * limite;
      const slicedProducts = produtos.slice(startIndex, startIndex + limite);
      setProducts(slicedProducts);
    }

    loadProdutos();
  }, [currentPage, total, limite, produtos]);

  return (
    <>
      <ProdutoTable>
        <thead>
          <tr>
            <ProdutoTh>Codigo do produto</ProdutoTh>
            <ProdutoTh>Nome do produto</ProdutoTh>
            <ProdutoTh>Quantidade em estoque</ProdutoTh>
            <ProdutoTh>Preço</ProdutoTh>
            <ProdutoTh>Status</ProdutoTh>
            <ProdutoTh></ProdutoTh>
            <ProdutoTh></ProdutoTh>
            <ProdutoTh></ProdutoTh>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={products.codigo}>
                <ProdutoTd>{product.codigo}</ProdutoTd>
                <ProdutoTd>{product.nome}</ProdutoTd>
                <ProdutoTd>{product.estoque}</ProdutoTd>
                <ProdutoTd>{product.preco}</ProdutoTd>
                <ProdutoTd>{product.status}</ProdutoTd>
                <ProdutoTd>
                  <button>alterar</button>
                </ProdutoTd>
                <ProdutoTd>
                  <AlterarStatusButton status={"Ativo"}>
                    Ativo
                  </AlterarStatusButton>
                </ProdutoTd>
                <ProdutoTd>
                  <button>Visualizar</button>
                </ProdutoTd>
              </tr>
            );
          })}
        </tbody>
      </ProdutoTable>
      <Pagination>
        <PaginationButton>
          <PaginationItem>
            <button
              onClick={() =>
                setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
              }
            >
              Anterior
            </button>
          </PaginationItem>
          {pages.map((page) => (
            <PaginationItem>
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                disabled={page === currentPage}
              >
                {page}
              </button>
            </PaginationItem>
          ))}
          <PaginationItem>
            <button
              onClick={() =>
                setCurrentPage(
                  currentPage < pages.length ? currentPage + 1 : pages.length
                )
              }
            >
              Próxima
            </button>
          </PaginationItem>
        </PaginationButton>
      </Pagination>
    </>
  );
}

export default Tabela;
