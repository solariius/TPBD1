import {
  Grid,
  Select,
  SelectChangeEvent,
  TextField,
  MenuItem,
} from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import Repository from "../../../repositories/Repository";
import Modal from "../../../Shared/Modal/Modal";

interface IDados {
  item?: string;
  descricao?: string;
  valor?: number;
  calorias?: number;
  idRefeicao?: number;
}
interface IModalEditarProps {
  modalEditarAberto: boolean;
  handleFecharModalEditar: () => void;
  handleConfirmarModalEditar: () => void;
  refItem?: React.Ref<HTMLInputElement>;
  refDescricao?: React.Ref<HTMLInputElement>;
  refValor?: React.Ref<HTMLInputElement>;
  refCalorias?: React.Ref<HTMLInputElement>;
}

const ModalEditar: FC<IModalEditarProps> = ({
  modalEditarAberto,
  handleFecharModalEditar,
  handleConfirmarModalEditar,
  refItem,
  refDescricao,
  refValor,
  refCalorias,
}) => {
  const [enviarDados, setEnviarDados] = useState<IDados>();
  return (
    <Modal
      modalAberto={modalEditarAberto}
      handleFecharModal={handleFecharModalEditar}
      handleConfirmarModal={handleConfirmarModalEditar}
      textoBotaoPrincipal="Salvar"
      textoBotaoSecundario="Cancelar"
      confirmacao={true}
      iconeFechar={true}
      tituloModal="Editar refeição do cardápio"
      descricaoModal={
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={3}
        >
          <Grid item>
            <Select
              id="refeicao"
              labelId="refeicao-label"
              value={enviarDados?.idRefeicao}
              variant="outlined"
              onChange={(event: SelectChangeEvent<string>) => {
                const idRefeicao = parseInt(event.target.value);
                if (event) setEnviarDados({ ...enviarDados, idRefeicao });
              }}
              inputRef={refItem}
            >
              {Repository.listarCardapio(enviarDados?.idRefeicao).map(
                (item) => {
                  return (
                    <MenuItem value={item.idRefeicao}>
                      {item.nomeRefeicao}
                    </MenuItem>
                  );
                }
              )}
            </Select>
          </Grid>
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
              inputRef={refItem}
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
              inputRef={refDescricao}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Valor"
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{
                maxLength: 5,
              }}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                const valor = parseInt(event.target.value);
                if (event) setEnviarDados({ ...enviarDados, valor });
              }}
              inputRef={refValor}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Calorias"
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{
                maxLength: 4,
              }}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                const calorias = parseInt(event.target.value);
                if (event) setEnviarDados({ ...enviarDados, calorias });
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
