import { Button, Grid, Typography } from "@mui/material";
import { FC, MouseEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import Repository from "../../../repositories/Repository";
import ModalEditar from "../components/ModalEditar";
import ModalInserir from "../components/ModalInserir";
import ModalRemover from "../components/ModalRemover";
const Edicao: FC = () => {
  const navegar = useNavigate();
  const [modalInserirAberto, setModalInserirAberto] = useState(false);
  const [modalRemoverAberto, setModalRemoverAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [itemCardapio, setItemCardapio] = useState<IRefeicao[]>();

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
    navegar("/");
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
  const handleConfirmarModalInserir = useCallback((enviarDados) => {
    setItemCardapio(Repository.inserirItemCardapio(enviarDados));
    setModalInserirAberto(false);
  }, []);

  const handleConfirmarModalRemover = useCallback(() => {
    setItemCardapio(Repository.removerItemCardapio(item));
    setModalRemoverAberto(false);
  }, []);

  const handleConfirmarModalEditar = useCallback(() => {
    setItemCardapio(Repository.editarItemCardapio());
    setModalEditarAberto(false);
  }, []);

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
        marginBottom="1rem"
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
            Selecione uma das opções abaixo:
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
        marginTop="4rem"
      >
        <Grid item>
          <Button
            sx={{ color: PRIMARY, backgroundColor: SECONDARY, width: "300px" }}
            onClick={onClickInserir}
          >
            Inserir
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ color: PRIMARY, backgroundColor: SECONDARY, width: "300px" }}
            onClick={onClickRemover}
          >
            Remover
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ color: PRIMARY, backgroundColor: SECONDARY, width: "300px" }}
            onClick={onClickEditar}
          >
            Editar
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ color: PRIMARY, backgroundColor: SECONDARY, width: "300px" }}
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
