import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import Modal from "../../../Shared/Modal/Modal";

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
  // recebe um node com numero do pedido e typography
  return (
    <Modal
      modalAberto={modalAberto}
      handleFecharModal={handleFecharModal}
      textoBotaoPrincipal="Fechar"
      iconeFechar={true}
      descricaoModal={
        <Grid container>
          <Typography>
            Pedido realizado, aguarde o entregador chegar com o seu pedido
            quentinho!
          </Typography>
          <Grid item>
            <Typography>Id pedido</Typography>

            <Grid item>{idPedido}</Grid>
          </Grid>
        </Grid>
      }
    />
  );
};
export default ModalFinalizar;
