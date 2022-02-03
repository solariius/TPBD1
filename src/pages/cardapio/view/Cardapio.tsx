// cada refeicao é um cardItem, tem engrenagem que faz
// ir pra tela de edição e carrinho que faz ir pra tela de pagamento
import { Edit } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import Repository from "../../../repositories/Repository";
import { IRefeicao } from "../../../Shared/interfaces/IRefeicao";
import CardItem from "../components/CardItem";

const Cardapio: FC = () => {
  const [itemCardapio, setItemCardapio] = useState<IRefeicao[]>();
  useEffect(() => {
    setItemCardapio(Repository.listarCardapio());
  }, []);
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
      <Grid item>  <img src="logoVeggie2world.png" alt="" height="50px" width="50px" /></Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
      >
        {itemCardapio?.length &&
          itemCardapio.map((item) => (
            <Grid item>
              <CardItem
                key={item.idRefeicao}
                nomeRefeicao={item.nomeRefeicao}
                valor={item.valorRefeicao}
                descricaoRefeicao={item.descricaoRefeicao}
                quantidadeRefeicao={item.quantidadeRefeicao}
                calorias={item.calorias}
              />
            </Grid>
          ))}
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
