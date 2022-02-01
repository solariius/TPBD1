import { FC } from "react";
import Modal from "./Modal";

interface IModalFinalizarProps {
  modalAberto: boolean;
  handleFecharModal: () => void;
  handleConfirmarModal: () => void;
}

const ModalFinalizar: FC<IModalFinalizarProps> = ({
  modalAberto,
  handleFecharModal,
  handleConfirmarModal,
}) => {
  //recebe um node com numero do pedido e typography
  return (
    <Modal
      modalAberto={modalAberto}
      handleFecharModal={handleFecharModal}
      textoBotaoPrincipal="Fechar"
      iconeFechar={true}
    />
  );
};
export default ModalFinalizar;
