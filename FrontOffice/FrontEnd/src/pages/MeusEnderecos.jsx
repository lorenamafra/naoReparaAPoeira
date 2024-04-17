import Icon from "@mdi/react";
import { mdiPlusCircleOutline } from "@mdi/js";
import { mdiAlertCircleOutline } from "@mdi/js";
import React from "react";
import {
  BotaoAdicionar,
  BotaoInativar,
  BotaoPadrao,
  ContainerBotao,
  ContainerBotaoAdd,
  ContainerDescricao,
  ContainerEnderecos,
  ContainerEntrega,
  ContainerFaturamento,
  MainMeusEnderecos,
  Subtitle,
  Title,
} from "../styles/MeusEnderecos";

function MeusEnderecos() {
  return (
    <MainMeusEnderecos>
      <Title>Meus Endereços</Title>
      <ContainerBotaoAdd>
        <BotaoAdicionar>
          <b>Add</b> <Icon path={mdiPlusCircleOutline} size={1} />
        </BotaoAdicionar>
      </ContainerBotaoAdd>
      <ContainerEnderecos>
        <ContainerEntrega>
          <Subtitle>Entrega</Subtitle>
          <ContainerDescricao>
            Rua Marcionilo Lessa 85 A - 04469070
            <ContainerBotao>
              <BotaoInativar>
                Inativar <Icon path={mdiAlertCircleOutline} size={1} />
              </BotaoInativar>
              <BotaoPadrao>Tornar Padrão</BotaoPadrao>
            </ContainerBotao>
          </ContainerDescricao>
        </ContainerEntrega>
      </ContainerEnderecos>
    </MainMeusEnderecos>
  );
}

export default MeusEnderecos;
