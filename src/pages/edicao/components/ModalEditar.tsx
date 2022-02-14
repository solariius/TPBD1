import {
  Grid,
  Select,
  SelectChangeEvent,
  TextField,
  MenuItem,
} from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import Repository from "../../../repositories/Repository";
import { IRefeicao } from "../../../Shared/interfaces/IRefeicao";
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
  handleConfirmarModalEditar: (enviarDados: IDados | undefined) => void;
}

const ModalEditar: FC<IModalEditarProps> = ({
  modalEditarAberto,
  handleFecharModalEditar,
  handleConfirmarModalEditar,
}) => {
  const [itemCardapio, setItemCardapio] = useState<IRefeicao[]>([]);
  const [enviarDados, setEnviarDados] = useState<IDados>();
  const list = async () => {
    const copiaCardapio = await Repository.listarCardapio();
    setItemCardapio(copiaCardapio);
  };
  useEffect(() => {
    list();
  }, [enviarDados?.idRefeicao]);

  return (
    <Modal
      modalAberto={modalEditarAberto}
      handleFecharModal={handleFecharModalEditar}
      handleConfirmarModal={() => handleConfirmarModalEditar(enviarDados)}
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
              value={enviarDados?.idRefeicao?.toString()}
              variant="outlined"
              onChange={(event: SelectChangeEvent<string>) => {
                const idRefeicao = parseInt(event.target.value);
                if (event) setEnviarDados({ ...enviarDados, idRefeicao });
              }}
            >
              {itemCardapio.map((item) => {
                return (
                  <MenuItem value={item.idRefeicao}>
                    {item.nomeRefeicao}
                  </MenuItem>
                );
              })}
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
              type="number"
              inputProps={{
                maxLength: 5,
              }}
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
              type="number"
              inputProps={{
                maxLength: 4,
              }}
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
export default ModalEditar;
