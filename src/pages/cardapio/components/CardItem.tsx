import { Grid } from "@mui/material";
import { FC } from "react";
import { SECONDARY } from "../../../config/theme";
interface ICardapioProps {
  nomeRefeicao: string;
  valor: number;
  descricaoRefeicao: string;
  quantidadeRefeicao: number;
  calorias: number;
}
const CardItem: FC<ICardapioProps> = ({
  nomeRefeicao,
  valor,
  descricaoRefeicao,
  quantidadeRefeicao,
  calorias,
}) => {
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
        {nomeRefeicao}
      </Grid>
      <Grid item xs={2}>
        {calorias}
      </Grid>
      <Grid item xs={2}>
        {valor}
      </Grid>
      <Grid item xs={10}>
        {descricaoRefeicao}
      </Grid>
      <Grid item xs={2}>
        {quantidadeRefeicao}
      </Grid>
    </Grid>
  );
};

export default CardItem;
