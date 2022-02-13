import { Grid, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { FC, useState } from "react";
import Repository from "../../../repositories/Repository";
import Modal from "../../../Shared/Modal/Modal";

interface IDados {
  idRefeicao?: number;
}
interface IModalRemoverProps {
  modalAberto: boolean;
  handleFecharModal: () => void;
  handleConfirmarModal: () => void;
  refItem?: React.Ref<HTMLInputElement>;
}

const ModalRemover: FC<IModalRemoverProps> = ({
  modalAberto,
  handleFecharModal,
  handleConfirmarModal,
  refItem,
}) => {
  const [enviarDados, setEnviarDados] = useState<IDados>();

  return (
    <Modal
      modalAberto={modalAberto}
      handleFecharModal={handleFecharModal}
      handleConfirmarModal={handleConfirmarModal}
      textoBotaoPrincipal="Remover"
      textoBotaoSecundario="Cancelar"
      confirmacao={true}
      iconeFechar={true}
      descricaoModal={
        <Grid container>
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
            {Repository.listarCardapio(enviarDados?.idRefeicao).map((item) => {
              return (
                <MenuItem value={item.idRefeicao}>{item.nomeRefeicao}</MenuItem>
              );
            })}
          </Select>
        </Grid>
      }
    />
  );
};
export default ModalRemover;
