import { Grid, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import Modal from "../../../Shared/Modal/Modal";

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
  // recebe um node com select para procurar um item na lista e remover
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
            onChange={onChangeRefeicao}
            inputRef={refItem}
          />
        </Grid>
      }
    />
  );
};
export default ModalRemover;
