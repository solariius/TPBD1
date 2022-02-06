import { Grid, Select, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import Modal from "../../../Shared/Modal/Modal";

interface IDados {
  idRefeicao?: number;
}
interface IModalRemoverProps {
  modalAberto: boolean;
  handleFecharModal: () => void;
  handleConfirmarModal: () => void;
  refItem: React.Ref<HTMLInputElement>;
  onChangeRefeicao: (codigo: SelectChangeEvent<string>) => void;
}

const ModalRemover: FC<IModalRemoverProps> = ({
  modalAberto,
  handleFecharModal,
  handleConfirmarModal,
  refItem,
  onChangeRefeicao,
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
            value={""}
            variant="outlined"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const idRefeicao = parseInt(event.target.value);
              if (event) setEnviarDados({ ...enviarDados, idRefeicao });
            }}
            inputRef={refItem}
          />
        </Grid>
      }
    />
  );
};
export default ModalRemover;
