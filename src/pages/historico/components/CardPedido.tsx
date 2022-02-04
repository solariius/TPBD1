import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { SECONDARY } from "../../../config/theme";
import Repository from "../../../repositories/Repository";
import { IPedidoCompleto } from "../../../Shared/interfaces/IPedidoCompleto";

interface PedidoProps {
  nomeCliente: string;
  cpfCliente: number;
}

const CardPedido: FC<PedidoProps> = (nomeCliente, cpfCliente) => {
  const [itemPedido, setItemPedido] = useState<IPedidoCompleto[]>();

  useEffect(() => {
    setItemPedido(Repository.listarPedidos());
  }, []);

  return (
    <Grid
      container
      borderRadius="4px"
      direction="row"
      rowSpacing={2}
      sx={{
        backgroundColor: SECONDARY,
        width: "900px",
        paddingBottom: "16px",
        paddingLeft: "16px",
      }}
    >
      <Grid item xs={8}>
        {nomeCliente}
      </Grid>
      <Grid item xs={4}>
        {cpfCliente}
      </Grid>

      {itemPedido?.length &&
        itemPedido.map((item) => (
          <Grid container item>
            <Grid item xs={4}>
              {item.nomeRefeicao}
            </Grid>
            <Grid item xs={2}>
              {item.calorias}
            </Grid>
            <Grid item xs={2}>
              {item.valorRefeicao}
            </Grid>
            <Grid item xs={2}>
              {item.quantidadeRefeicao}
            </Grid>
            <Grid item xs={12}>
              {item.descricaoRefeicao}
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

export default CardPedido;
