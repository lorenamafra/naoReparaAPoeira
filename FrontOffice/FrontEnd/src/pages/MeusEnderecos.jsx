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
import { useLocation, useNavigate } from "react-router";

function MeusEnderecos() {
  const prevUser = useLocation().state.user;
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [enderecos, setEnderecos] = useState([]);
  useEffect(() => {
    console.log(user);
    axios
      .get(`http://localhost:8081/cliente/${prevUser.cpf}/enderecos`)
      .then((resp) => {
        setEnderecos(resp.data);
      });

    axios
      .get(`http://localhost:8081/cliente/${prevUser.email}`)
      .then((resp) => {
        console.log(user);
        prevUser.endereco_faturamento_cep = resp.data.endereco_faturamento_cep;
        prevUser.endereco_faturamento_complemento =
          resp.data.endereco_faturamento_complemento;
        prevUser.endereco_faturamento_logradouro =
          resp.data.endereco_faturamento_logradouro;
        prevUser.endereco_faturamento_numero =
          resp.data.endereco_faturamento_numero;
        setUser(prevUser);
      });

    console.log(prevUser);
  }, []);

  function handleAlterStatus(id) {
    console.log(id);
    axios
      .put("http://localhost:8081/endereco/inativar", {
        id_endereco: id,
      })
      .then((resp) => {
        if (resp.status == 200) {
          navigate(0);
        }
      });
  }
  const handleFaturamento = (address) => {
    console.log(address);
    axios
      .put(
        `http://localhost:8081/cliente/${user.cpf}/endereco/alterar/faturamento`,
        address
      )
      .then((resp) => {
        console.log(resp.data);
        if (resp.status == 200) {
          navigate(0);
        }
      });
  };
  const handlePadrao = (id) => {
    console.log(id);
    console.log(user.cpf);
    axios.put("http://localhost:8081/endereco/alterar/despadronizar", user);
    axios
      .put("http://localhost:8081/endereco/alterar/padrao", {
        id_endereco: id,
      })
      .then((resp) => {
        if (resp.status == 200) {
          window.alert("Seu endereço agora é padrão :P");
        }
      });
  };
  return (
    <MainMeusEnderecos>
      <Title>Meus Endereços</Title>
      <ContainerBotaoAdd>
        <BotaoAdicionar
          onClick={() =>
            navigate("/AdicionarEndereco", { state: { user: user } })
          }
        >
          <b>Add</b> <Icon path={mdiPlusCircleOutline} size={1} />
        </BotaoAdicionar>
      </ContainerBotaoAdd>

      <div>
        <ContainerEntrega>
          <Subtitle>Faturamento</Subtitle>
          <ContainerDescricao>
            {user.endereco_faturamento_logradouro},{" "}
            {user.endereco_faturamento_numero} - {user.endereco_faturamento_cep}
            <ContainerBotao>
              <BotaoPadrao onClick={() => handlePadrao(endereco.id_endereco)}>
                Tornar Padrão
              </BotaoPadrao>
            </ContainerBotao>
          </ContainerDescricao>
        </ContainerEntrega>
      </div>
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
                  <BotaoPadrao onClick={() => handleFaturamento(endereco)}>
                    Tornar Faturamento
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
