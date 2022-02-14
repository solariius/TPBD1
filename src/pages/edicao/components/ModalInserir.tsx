//criar um erro para pratos com o mesmo nome.

import { Grid, TextField } from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";
import Modal from "../../../Shared/Modal/Modal";

interface IModalInserirProps {
  modalInserirAberto: boolean;
  handleFecharModalInserir: () => void;
  handleConfirmarModalInserir: (enviarDados: IDados | undefined) => void;
}
interface IDados {
  item?: string;
  descricao?: string;
  valor?: number;
  calorias?: number;
}

const ModalInserir: FC<IModalInserirProps> = ({
  modalInserirAberto,
  handleFecharModalInserir,
  handleConfirmarModalInserir,
}) => {
  const [enviarDados, setEnviarDados] = useState<IDados>();

  return (
    <Modal
      tituloModal="Inserir prato no cardápio"
      modalAberto={modalInserirAberto}
      handleFecharModal={handleFecharModalInserir}
      handleConfirmarModal={() => {
        handleConfirmarModalInserir(enviarDados);
      }}
      textoBotaoPrincipal="Inserir"
      textoBotaoSecundario="Cancelar"
      confirmacao={true}
      iconeFechar={true}
      descricaoModal={
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
        >
          <Grid item>
            <TextField
              label="Item"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 50,
              }}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                const item = event.target.value;
                if (event) setEnviarDados({ ...enviarDados, item });
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Descricao"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 150,
              }}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                const descricao = event.target.value;
                if (event) setEnviarDados({ ...enviarDados, descricao });
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Valor"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 5,
              }}
              type="number"
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                const valor = parseInt(event.target.value);
                if (event) setEnviarDados({ ...enviarDados, valor });
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Calorias"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 4,
              }}
              type="number"
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                const calorias = parseInt(event.target.value);
                if (event) setEnviarDados({ ...enviarDados, calorias });
              }}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
export default ModalInserir;
