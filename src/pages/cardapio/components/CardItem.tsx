import { Grid, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import { usePedidoContexto } from "../../../context/globalContext";
import { formatarCalorias, formatarMoeda } from "../../../Shared/Utils";

interface ICardapioProps {
  nomeRefeicao: string;
  valor: number;
  descricaoRefeicao: string;
  quantidadeRefeicao: number;
  calorias: number;
  id: number;
}
const CardItem: FC<ICardapioProps> = ({
  nomeRefeicao,
  valor,
  descricaoRefeicao,
  quantidadeRefeicao,
  calorias,
  id,
}) => {
  const { pedido, setPedido } = usePedidoContexto();
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
        fontWeight: "500",
        fontSize: "1.5rem",
        color: PRIMARY,
      }}
    >
      <Grid item xs={8}>
        {nomeRefeicao}
      </Grid>
      <Grid item xs={2}>
        {formatarCalorias(calorias)}
      </Grid>
      <Grid item xs={2}>
        {formatarMoeda(valor)}
      </Grid>
      <Grid item xs={10}>
        {descricaoRefeicao}
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="quantidade"
          variant="outlined"
          sx={{ maxWidth: "90%" }}
          inputProps={{
            maxLength: 4,
          }}
          defaultValue="0"
          type="number"
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            const quantidade = parseInt(event.target.value);
            const novasRefeicoes =
              pedido?.refeicao?.length &&
              pedido.refeicao.map((refeicao) => {
                if (refeicao.idRefeicao === id)
                  return { ...refeicao, quantidadeRefeicao: quantidade };
                else return refeicao;
              });
            setPedido({
              ...pedido,
              refeicao: novasRefeicoes,
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CardItem;
