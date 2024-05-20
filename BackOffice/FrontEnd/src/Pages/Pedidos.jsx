import React, { useEffect, useState } from "react";
import { Btn, MainPedidos } from "../Styles/Pedidos";
import { ProdutoTable, ProdutoTh } from "../Styles/ListaProdutos.styles";
import axios from "axios";

function Pedidos() {
  //tudo que acontecerá com página antes de ser carregada (receber os dados)
  //a lista vazia é para que não seja atualizado diversas vezes, pois o axios irá retornar os dados sempre que a lista for atualizada
  useEffect(() => {
    //promise
    axios.get("http://localhost:8081/pedidos").then((resp) => {
      setPedidos(resp.data);
    });
  }, []);
  const [pedidos, setPedidos] = useState([]);
  const handleAlterarStatus = (status, id_pedido) => {
    console.log(status, id_pedido);
    if(status=="Aguardando Pagamento"){
        axios.put("localhost:8081/pedido/alterar",{status : "Pagamento Aprovado", id_pedido : id_pedido}).then((resp)=> {console.log(resp.data)}) }
        if(status=="Pagamento Aprovado"){
            axios.put("localhost:8081/pedido/alterar",{status : "", id_pedido : id_pedido}).then((resp)=> {console.log(resp.data)})
  };
  return (
    <div>
      <MainPedidos>
        <ProdutoTable>
          <thead>
            <tr>
              <ProdutoTh>Data do Pedido</ProdutoTh>
              <ProdutoTh>Nº do Pedido</ProdutoTh>
              <ProdutoTh>Valor Total</ProdutoTh>
              <ProdutoTh>Status</ProdutoTh>
              <ProdutoTh>Alterar Status</ProdutoTh>
              <ProdutoTh></ProdutoTh>
              <ProdutoTh></ProdutoTh>
            </tr>
          </thead>
          {/* map: passar por cada item da lista e chamá-lo de pedido */}
          {pedidos.map((pedido) => (
            <tr>
              <td>
                {pedido.data.substring(8, 10)} / {pedido.data.substring(5, 7)} /
                {pedido.data.substring(0, 4)}
              </td>
              <td>{pedido.NF}</td>
              <td>{pedido.valor_total}</td>
              <td>{pedido.status}</td>
              <td>
                <Btn
                  onClick={() =>
                    handleAlterarStatus(pedido.status, pedido.id_pedido)
                  }
                >
                  Alterar Status
                </Btn>
              </td>
            </tr>
          ))}
        </ProdutoTable>
      </MainPedidos>
    </div>
  );
}

export default Pedidos;
