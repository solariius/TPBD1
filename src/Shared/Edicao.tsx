//4 botoes (inserir,remover,editar e voltar para cardápio)

import { Button, Grid, Typography } from "@mui/material";
import { FC, MouseEventHandler, useCallback, useState } from "react";
import ModalEditar from "./Modal/ModalEditar";
import ModalInserir from "./Modal/ModalInserir";
import ModalRemover from "./Modal/ModalRemover";

const Edicao: FC = ({}) => {
  const [modalInserirAberto, setModalInserirAberto] = useState(false);
  const [modalRemoverAberto, setModalRemoverAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);

  const onClickInserir: MouseEventHandler<HTMLButtonElement> = () => {
    setModalInserirAberto(true);
  };
  const onClickRemover: MouseEventHandler<HTMLButtonElement> = () => {
    setModalRemoverAberto(true);
  };
  const onClickEditar: MouseEventHandler<HTMLButtonElement> = () => {
    setModalEditarAberto(true);
  };
  const onClickCardapio: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("IR CARDAPIOO");
  };
  const handleFecharModalInserir = useCallback(
    () => setModalInserirAberto(false),
    []
  );
  const handleFecharModalRemover = useCallback(
    () => setModalRemoverAberto(false),
    []
  );
  const handleFecharModalEditar = useCallback(
    () => setModalEditarAberto(false),
    []
  );
  const handleConfirmarModalInserir = useCallback(() => {
    setModalInserirAberto(false);
    console.log("INSERE");
  }, []);

  const handleConfirmarModalRemover = useCallback(() => {
    setModalRemoverAberto(false);
    console.log("REMOVE");
  }, []);

  const handleConfirmarModalEditar = useCallback(() => {
    setModalEditarAberto(false);
    console.log("EDITA");
  }, []);

  return (
    <Grid container item sx={{ backgroundColor: "#8fe3ad" }}>
      <Grid item>
        <Typography fontSize="1.5rem">
          Selecione uma das opções abaixo:
        </Typography>
      </Grid>
      <Grid
        item
        rowSpacing={3}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Button
          sx={{ color: "black", backgroundColor: "#006654", width: "300px" }}
          onClick={onClickInserir}
        >
          Inserir
        </Button>
        <Button
          sx={{ color: "black", backgroundColor: "#006654", width: "300px" }}
          onClick={onClickRemover}
        >
          Remover
        </Button>
        <Button
          sx={{ color: "black", backgroundColor: "#006654", width: "300px" }}
          onClick={onClickEditar}
        >
          Editar
        </Button>
        <Button
          sx={{ color: "black", backgroundColor: "#006654", width: "300px" }}
          onClick={onClickCardapio}
        >
          Voltar para o cardápio
        </Button>
      </Grid>
      <Grid item>
        <ModalInserir
          modalInserirAberto={modalInserirAberto}
          handleFecharModalInserir={handleFecharModalInserir}
          handleConfirmarModalInserir={handleConfirmarModalInserir}
        />
        <ModalRemover
          modalAberto={modalRemoverAberto}
          handleFecharModal={handleFecharModalRemover}
          handleConfirmarModal={handleConfirmarModalRemover}
        />
        <ModalEditar
          modalEditarAberto={modalEditarAberto}
          handleFecharModalEditar={handleFecharModalEditar}
          handleConfirmarModalEditar={handleConfirmarModalEditar}
        />
      </Grid>
    </Grid>
  );
};
export default Edicao;
