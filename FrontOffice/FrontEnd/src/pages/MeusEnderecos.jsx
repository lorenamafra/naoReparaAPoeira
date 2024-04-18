import Icon from "@mdi/react";
import { mdiPlusCircleOutline } from "@mdi/js";
import { mdiAlertCircleOutline } from "@mdi/js";
import React, { useEffect, useState } from "react";
import {
  BotaoAdicionar,
  BotaoInativar,
  BotaoPadrao,
  ContainerBotao,
  ContainerBotaoAdd,
  ContainerDescricao,
  ContainerEnderecos,
  ContainerEntrega,
  MainMeusEnderecos,
  Subtitle,
  Title,
} from "../styles/MeusEnderecos";
import axios from "axios";
function MeusEnderecos() {
  const [enderecos, setEnderecos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/cliente/51501128876/enderecos")
      .then((resp) => {
        setEnderecos(resp.data);
      });
  }, []);

  function handleAlterStatus(id) {
    console.log(id);
    axios
      .put("http://localhost:8081/endereco/inativar", {
        id_endereco: id,
      })
      .then((resp) => {
        console.log(resp);
      });
  }

  const handlePadrao = (id) => {
    console.log(id);
    axios
      .put("http://localhost:8081/endereco/alterar/padrao", {
        id_endereco: id,
      })
      .then((resp) => {
        console.log(resp);
      });
  };
  return (
    <MainMeusEnderecos>
      <Title>Meus Endereços</Title>
      <ContainerBotaoAdd>
        <BotaoAdicionar>
          <b>Add</b> <Icon path={mdiPlusCircleOutline} size={1} />
        </BotaoAdicionar>
      </ContainerBotaoAdd>

      {enderecos.map((endereco) => {
        console.log(endereco);
        return (
          <ContainerEnderecos>
            <ContainerEntrega>
              <Subtitle>Entrega</Subtitle>
              <ContainerDescricao>
                {endereco.logradouro}, {endereco.numero} - {endereco.cep}
                <ContainerBotao>
                  <BotaoInativar
                    onClick={() => handleAlterStatus(endereco.id_endereco)}
                  >
                    Inativar <Icon path={mdiAlertCircleOutline} size={1} />
                  </BotaoInativar>
                  <BotaoPadrao
                    onClick={() => handlePadrao(endereco.id_endereco)}
                  >
                    Tornar Padrão
                  </BotaoPadrao>
                </ContainerBotao>
              </ContainerDescricao>
            </ContainerEntrega>
          </ContainerEnderecos>
        );
      })}
    </MainMeusEnderecos>
  );
}

export default MeusEnderecos;
