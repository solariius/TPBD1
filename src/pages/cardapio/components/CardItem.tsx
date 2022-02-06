import { SelectChangeEvent } from "@mui/material";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { PRIMARY, SECONDARY } from "../../../config/theme";
interface IDados {
  quantidade?: number;
}
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
  const [enviarDados, setEnviarDados] = useState<IDados>();

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
        {calorias}
      </Grid>
      <Grid item xs={2}>
        {valor}
      </Grid>
      <Grid item xs={10}>
        {descricaoRefeicao}
      </Grid>
      <Grid item xs={2}>
        <InputLabel id="quantidade-label">quantidade</InputLabel>
        <Select
          id="quantidade"
          labelId="quantidade-label"
          label="quantidade"
          value={""}
          variant="outlined"
          onChange={(event: SelectChangeEvent<string>) => {
            const quantidade = parseInt(event.target.value);
            if (event) setEnviarDados({ ...enviarDados, quantidade });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CardItem;
