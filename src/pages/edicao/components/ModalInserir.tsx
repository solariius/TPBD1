import { FC } from "react";
import Modal from "../../../Shared/Modal/Modal";

interface IModalInserirProps {
  modalInserirAberto: boolean;
  handleFecharModalInserir: () => void;
  handleConfirmarModalInserir: () => void;
}

const ModalInserir: FC<IModalInserirProps> = ({
  modalInserirAberto,
  handleFecharModalInserir,
  handleConfirmarModalInserir,
}) => {
  // recebe um node com 3 inputs (titulo, descrição e preço)
  return (
    <Modal
      modalAberto={modalInserirAberto}
      handleFecharModal={handleFecharModalInserir}
      handleConfirmarModal={handleConfirmarModalInserir}
      textoBotaoPrincipal="Inserir"
      textoBotaoSecundario="Cancelar"
      confirmacao={true}
      iconeFechar={true}
    />
  );
};
export default ModalInserir;
