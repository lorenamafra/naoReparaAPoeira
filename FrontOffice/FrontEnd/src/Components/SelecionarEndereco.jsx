/* eslint-disable react/jsx-key */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ContainerBotaoAdd } from "../styles/MeusEnderecos";
import { BotaoPadrao, ButtonConfirmar } from "../styles/MainStyles.styles";
import { mdiPlusCircleOutline } from "@mdi/js";

import Icon from "@mdi/react";
import { EnderecoEntregaContainer } from "../styles/CalculoFrete.styles";

function SelecionarEndereco() {
  const navigate = useNavigate();
  const [enderecos, setEnderecos] = useState([]);
  const [loader, setLoader] = useState(true);
  const user = useLocation().state.pedido.cliente;
  const pedido = useLocation().state.pedido;
  console.log(user);
  useEffect(() => {
    let getAdds = async () => {
      console.log(user.cpf);
      await axios
        .get(`http://localhost:8081/cliente/${user.cpf}/enderecos`)
        .then((resp) => {
          console.log(resp.data);
          setEnderecos(resp.data);
        });

      setLoader(false);
    };
    getAdds();
  }, []);

  const handleSubmit = (add) => {
    console.log(add);
    console.log(pedido);
    pedido.envio.endereco.id_endereco = add.id_endereco;
    pedido.envio.endereco.cep = add.cep;
    pedido.envio.endereco.logradouro = add.logradouro;
    pedido.envio.endereco.numero = add.numero;
    pedido.envio.endereco.complemento = add.complemento;

    console.log(pedido);

    navigate("/Frete", { state: { pedido: pedido } });
  };

  return (
    <div style={{ padding: "5rem" }}>
      <ContainerBotaoAdd>
        <ButtonConfirmar
          onClick={() =>
            navigate("/AdicionarEndereco", { state: { user: user } })
          }
        >
          <b>Add</b> <Icon path={mdiPlusCircleOutline} size={1} />
        </ButtonConfirmar>
      </ContainerBotaoAdd>
      {loader ? (
        <p> is Loading</p>
      ) : (
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          {enderecos.map((endereco) => {
            return (
              <EnderecoEntregaContainer>
                <p>
                  {endereco.logradouro}, {endereco.numero} - {endereco.cep}
                </p>
                <BotaoPadrao
                  onClick={() => {
                    handleSubmit(endereco);
                  }}
                >
                  {" "}
                  Selecionar{" "}
                </BotaoPadrao>
              </EnderecoEntregaContainer>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SelecionarEndereco;
