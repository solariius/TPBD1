// 4 botoes (inserir,remover,editar e voltar para cardápio)

import { Button, Grid, Typography } from "@mui/material";
import { FC, MouseEventHandler, useCallback, useState } from "react";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import ModalEditar from "../components/ModalEditar";
import ModalInserir from "../components/ModalInserir";
import ModalRemover from "../components/ModalRemover";
const Edicao: FC = () => {
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
    <Grid
      container
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: PRIMARY }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
      >
        <Grid item sx={{ margin: "1rem" }}>
          <Typography fontSize="2rem" color={SECONDARY}>
            Selecione uma das opções abaixo:
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{ color: "black", backgroundColor: SECONDARY, width: "300px" }}
            onClick={onClickInserir}
          >
            Inserir
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ color: "black", backgroundColor: SECONDARY, width: "300px" }}
            onClick={onClickRemover}
          >
            Remover
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ color: "black", backgroundColor: SECONDARY, width: "300px" }}
            onClick={onClickEditar}
          >
            Editar
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ color: "black", backgroundColor: SECONDARY, width: "300px" }}
            onClick={onClickCardapio}
          >
            Voltar para o cardápio
          </Button>
        </Grid>
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
