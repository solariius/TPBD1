import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { SECONDARY } from "../../../config/theme";
import Repository from "../../../repositories/Repository";
import { IPedidoCompleto } from "../../../Shared/interfaces/IPedidoCompleto";
import { formatarCalorias, formatarMoeda } from "../../../Shared/Utils";

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
        itemPedido.map((item) => {
          item.refeicao.length &&
            item.refeicao.map((refeicao) => (
              <Grid container item>
                <Grid item xs={6}>
                  {refeicao.nomeRefeicao}
                </Grid>
                <Grid item xs={2}>
                  {formatarCalorias(refeicao.calorias)}
                </Grid>
                <Grid item xs={2}>
                  {formatarMoeda(refeicao.valorRefeicao)}
                </Grid>
                <Grid item xs={2}>
                  {refeicao.quantidadeRefeicao}
                </Grid>
              </Grid>
            ));
        })}
    </Grid>
  );
};

export default CardPedido;
