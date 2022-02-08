import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { PRIMARY } from "../../../config/theme";
import { usePedidoContexto } from "../../../context/globalContext";
import Modal from "../../../Shared/Modal/Modal";

interface IModalFinalizarProps {
  modalAberto: boolean;
  handleFecharModal: () => void;
}

const ModalFinalizar: FC<IModalFinalizarProps> = ({
  modalAberto,
  handleFecharModal,
}) => {
  // recebe um node com numero do pedido e typography
  const { pedido, setPedido } = usePedidoContexto();
  return (
    <Modal
      modalAberto={modalAberto}
      handleFecharModal={handleFecharModal}
      textoBotaoSecundario="Fechar"
      descricaoModal={
        <Grid container direction="column" justifyContent="center">
          <Typography>
            Pedido realizado, aguarde o entregador chegar com o seu pedido
            quentinho!
          </Typography>
          <Grid
            item
            sx={{
              fontWeight: "500",
              fontSize: "1.5rem",
              color: PRIMARY,
            }}
          >
            <Grid item>
              <Typography>Id pedido:</Typography>
            </Grid>

            <Grid item>{pedido.idPedido}</Grid>
          </Grid>
        </Grid>
      }
    />
  );
};
export default ModalFinalizar;
