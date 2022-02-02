import { Grid } from "@mui/material";
import { FC } from "react";
import { SECONDARY } from "../../../config/theme";
// aqui quero retornar um item desses para cada prato da lista de pratos (ps eu sei que é no cardapio.tsx)

const CardItem: FC = () => {
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
      <Grid item xs={6}>
        prato.titulo
      </Grid>

      <Grid item xs={6}>
        prato.valor
      </Grid>
      <Grid item xs={6}>
        prato.descrição
      </Grid>
      <Grid item xs={6}>
        prato.quantidade
      </Grid>
    </Grid>
  );
};

export default CardItem;
