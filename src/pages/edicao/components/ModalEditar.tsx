import {
  Grid,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";
import Modal from "../../../Shared/Modal/Modal";

interface IModalEditarProps {
  modalEditarAberto: boolean;
  handleFecharModalEditar: () => void;
  handleConfirmarModalEditar: () => void;
  refItem: React.Ref<HTMLInputElement>;
  refDescricao: React.Ref<HTMLInputElement>;
  refValor: React.Ref<HTMLInputElement>;
  refCalorias: React.Ref<HTMLInputElement>;
  onChangeRefeicao: (codigo: SelectChangeEvent<string>) => void;
}

const ModalEditar: FC<IModalEditarProps> = ({
  modalEditarAberto,
  handleFecharModalEditar,
  handleConfirmarModalEditar,
  refItem,
  refDescricao,
  refValor,
  refCalorias,
  onChangeRefeicao,
}) => {
  // recebe um node select para procurar o item e pode editar valor titulo e descrição
  return (
    <Modal
      modalAberto={modalEditarAberto}
      handleFecharModal={handleFecharModalEditar}
      handleConfirmarModal={handleConfirmarModalEditar}
      textoBotaoPrincipal="Salvar"
      textoBotaoSecundario="Cancelar"
      confirmacao={true}
      iconeFechar={true}
      tituloModal="Editar Refeição"
      descricaoModal={
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
        >
          <Typography>Digite o nome da refeição que deseja editar.</Typography>
          <Select
            id="refeicao"
            labelId="refeicao-label"
            value={""}
            variant="outlined"
            onChange={onChangeRefeicao}
            inputRef={refItem}
          />
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
export default ModalEditar;
