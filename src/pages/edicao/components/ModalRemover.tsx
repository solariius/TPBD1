import { Grid, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { FC, useState, useEffect } from "react";
import Repository from "../../../repositories/Repository";
import { IRefeicao } from "../../../Shared/interfaces/IRefeicao";
import Modal from "../../../Shared/Modal/Modal";

interface IDados {
  idRefeicao?: number;
}
interface IModalRemoverProps {
  modalAberto: boolean;
  handleFecharModal: () => void;
  handleConfirmarModal: (enviarDados: IDados | undefined) => void;
}

const ModalRemover: FC<IModalRemoverProps> = ({
  modalAberto,
  handleFecharModal,
  handleConfirmarModal,
}) => {
  const [itemCardapio, setItemCardapio] = useState<IRefeicao[]>([]);
  const [enviarDados, setEnviarDados] = useState<IDados>();
  const list = async () => {
    const copiaCardapio = await Repository.listarCardapio();
    setItemCardapio(copiaCardapio);
  };
  useEffect(() => {
    list();
  }, [enviarDados?.idRefeicao]);

  return (
    <Modal
      modalAberto={modalAberto}
      handleFecharModal={handleFecharModal}
      handleConfirmarModal={() => {
        handleConfirmarModal(enviarDados);
      }}
      textoBotaoPrincipal="Remover"
      textoBotaoSecundario="Cancelar"
      confirmacao={true}
      iconeFechar={true}
      descricaoModal={
        <Grid container>
          <Select
            id="refeicao"
            labelId="refeicao-label"
            value={enviarDados?.idRefeicao?.toString()}
            variant="outlined"
            onChange={(event: SelectChangeEvent<string>) => {
              const idRefeicao = parseInt(event.target.value);
              if (event) setEnviarDados({ ...enviarDados, idRefeicao });
            }}
          >
            {itemCardapio.map((item) => {
              return (
                <MenuItem value={item.idRefeicao}>{item.nomeRefeicao}</MenuItem>
              );
            })}
          </Select>
        </Grid>
      }
    />
  );
};
export default ModalRemover;
