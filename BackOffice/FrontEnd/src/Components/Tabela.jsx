import React, { useState } from "react";

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

  const total = produtos.length;

  const limite = 10;
  const totalPages = Math.ceil(total / limite);

  const arrayPages = [];
  for (let i = 1; i <= totalPages; i++) {
    arrayPages.push(i);
  }

  const paginas = arrayPages.length;

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
          {produtos.map((produto) => {
            return (
              <tr key={produto.codigo}>
                <ProdutoTd>{produto.codigo}</ProdutoTd>
                <ProdutoTd>{produto.nome}</ProdutoTd>
                <ProdutoTd>{produto.estoque}</ProdutoTd>
                <ProdutoTd>{produto.preco}</ProdutoTd>
                <ProdutoTd>{produto.status}</ProdutoTd>
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
        <div>Qtd de itens: {total} </div>
        <PaginationButton>
          <PaginationItem>Anterior</PaginationItem>
          {arrayPages.map((arrayPages) => {
            return <PaginationItem>{arrayPages}</PaginationItem>;
          })}
          <PaginationItem>Próxima</PaginationItem>
        </PaginationButton>
      </Pagination>
    </>
  );
}

export default Tabela;
