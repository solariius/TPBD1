//criar um erro para pratos com o mesmo nome.

import { Grid, TextField } from "@mui/material";
import { FC } from "react";
import Modal from "../../../Shared/Modal/Modal";

interface IModalInserirProps {
  modalInserirAberto: boolean;
  handleFecharModalInserir: () => void;
  handleConfirmarModalInserir: () => void;
  refItem: React.Ref<HTMLInputElement>;
  refDescricao: React.Ref<HTMLInputElement>;
  refValor: React.Ref<HTMLInputElement>;
  refCalorias: React.Ref<HTMLInputElement>;
}

const ModalInserir: FC<IModalInserirProps> = ({
  modalInserirAberto,
  handleFecharModalInserir,
  handleConfirmarModalInserir,
  refItem,
  refDescricao,
  refValor,
  refCalorias,
}) => {
  // recebe um node com 3 inputs (titulo, descrição e preço)
  return (
    <Modal
      tituloModal="Inserir prato no cardápio"
      modalAberto={modalInserirAberto}
      handleFecharModal={handleFecharModalInserir}
      handleConfirmarModal={handleConfirmarModalInserir}
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
                maxLength: 250,
              }}
              inputRef={refItem}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Descricao"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 250,
              }}
              inputRef={refDescricao}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Valor"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 250,
              }}
              inputRef={refValor}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Calorias"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 250,
              }}
              inputRef={refCalorias}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
export default ModalInserir;
