import { FC } from "react";
import Modal from "../../../Shared/Modal/Modal";

interface IModalRemoverProps {
  modalAberto: boolean;
  handleFecharModal: () => void;
  handleConfirmarModal: () => void;
}

const ModalRemover: FC<IModalRemoverProps> = ({
  modalAberto,
  handleFecharModal,
  handleConfirmarModal,
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
    />
  );
};
export default ModalRemover;
