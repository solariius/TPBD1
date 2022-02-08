import { Edit } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import { usePedidoContexto } from "../../../context/globalContext";
import Repository from "../../../repositories/Repository";
import { IRefeicao } from "../../../Shared/interfaces/IRefeicao";
import CardItem from "../components/CardItem";

// sempre q quiser mudar algo no pedido da setPedido e pronto
// setPedido({...pedido, nomeCliente}) -> isso aqui atualiza o nome do cliente

const Cardapio: FC = () => {
  const navegar = useNavigate();
  const { pedido, setPedido } = usePedidoContexto();
  const [itemCardapio, setItemCardapio] = useState<IRefeicao[]>();
  useEffect(() => {
    setItemCardapio(Repository.listarCardapio());
    if (setPedido)
      setPedido({
        ...pedido,
        refeicao: [...Repository.listarCardapio()],
      });
  }, []);

  const onClickEdit: MouseEventHandler<SVGSVGElement> = () => {
    navegar("/edicao");
  };

  const onClickPagar: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(pedido);
    navegar("/pagamento");
  };

  const onClickHistorico: MouseEventHandler<HTMLImageElement> = () => {
    navegar("/historico");
  };
  return (
    <Grid
      container
      direction="column"
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: PRIMARY }}
    >
      <Grid
        container
        item
        justifyContent="center"
        marginTop="2rem"
        marginBottom="2rem"
        alignItems="center"
      >
        <Grid item>
          <img
            src="logoVeggie2world.png"
            alt="Logo veggie to world"
            width="48px"
            height="48px"
          />
        </Grid>
        <Grid item>
          <Typography
            fontWeight="700"
            fontSize="1.5rem"
            marginLeft="1rem"
            sx={{ color: SECONDARY }}
          >
            Cardápio Veggie2World
          </Typography>
        </Grid>
        <Grid item marginLeft="2rem">
          <Edit
            onClick={onClickEdit}
            sx={{ width: "36px", height: "36px", color: SECONDARY }}
          ></Edit>
        </Grid>
        <Grid item marginLeft="2rem">
          <img
            onClick={onClickHistorico}
            src="historico.png"
            alt="historico"
            width="48px"
            height="48px"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
      >
        {pedido?.refeicao?.length &&
          pedido.refeicao.map((item) => (
            <Grid item>
              <CardItem
                key={item.idRefeicao}
                id={item.idRefeicao}
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
            sx={{ color: PRIMARY, backgroundColor: SECONDARY, width: "300px" }}
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
