import { FC } from "react";
import Modal from "../../../Shared/Modal/Modal";

interface IModalEditarProps {
  modalEditarAberto: boolean;
  handleFecharModalEditar: () => void;
  handleConfirmarModalEditar: () => void;
}

const ModalEditar: FC<IModalEditarProps> = ({
  modalEditarAberto,
  handleFecharModalEditar,
  handleConfirmarModalEditar,
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
    />
  );
};
export default ModalEditar;
