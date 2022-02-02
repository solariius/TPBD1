// cada refeicao é um cardItem, tem engrenagem que faz
// ir pra tela de edição e carrinho que faz ir pra tela de pagamento

import { Edit } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import CardItem from "../components/CardItem";

const Cardapio: FC = () => {
  const onClickPagar: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("TELA PAGAMENTO");
  };
  return (
    <Grid
      container
      direction="column"
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: PRIMARY }}
    >
      <Grid
        item
        justifyContent="right"
        sx={{ marginRight: "20px", marginTop: "20px" }}
      >
        <Edit sx={{ color: SECONDARY }}></Edit>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
      >
        <Grid item>
          <CardItem />
        </Grid>
        <Grid item>
          <Button
            sx={{ color: "black", backgroundColor: SECONDARY, width: "300px" }}
            onClick={onClickPagar}
          >
            Pagar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cardapio;
