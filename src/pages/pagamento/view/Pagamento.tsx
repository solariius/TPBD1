import {
  FormControlLabel,
  FormControl,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import {
  ChangeEvent,
  FC,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { PRIMARY, SECONDARY, SECONDARY2 } from "../../../config/theme";
import { usePedidoContexto } from "../../../context/globalContext";
import CardInformativo from "../../../Shared/cardInformativo/CardInformativo";
import { formaDePagamento } from "../../../Shared/constantes/Constantes";
import { formatarMoeda } from "../../../Shared/Utils";
import ModalFinalizar from "../components/ModalFinalizar";

const Pagamento: FC = () => {
  const navegar = useNavigate();
  const [modalAberto, setModalAberto] = useState(false);
  const onClickFinalizar: MouseEventHandler<HTMLButtonElement> = () => {
    setModalAberto(true);
  };

  const handleFecharModal = useCallback(() => {
    setModalAberto(false);
    navegar("/");
    console.log("salva no banco e volta p cardapio");
  }, []);

  const [formaPagamentoSelecionada, setFormaPagamentoSelecionada] =
    useState<number>();

  const handleTipoPagamento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormaPagamentoSelecionada(parseInt(event.target.value));
  };

  const { pedido, setPedido } = usePedidoContexto();
  console.log(pedido);
  const valorTotal =
    pedido?.refeicao.reduce(
      (soma, refeicao) =>
        soma + refeicao.valorRefeicao * refeicao.quantidadeRefeicao,
      0
    ) || 0;

  return (
    <Grid
      container
      direction="row"
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: PRIMARY }}
    >
      <Grid
        container
        item
        marginLeft="1rem"
        marginTop="1rem"
        alignItems="center"
      >
        <Grid item>
          <img src="logoVeggie2world.png" alt="" width="48px" height="48px" />
        </Grid>
        <Grid item marginLeft="1rem">
          <Typography
            fontWeight="700"
            fontSize="1.2rem"
            sx={{ color: SECONDARY }}
          >
            Resumo do pedido e forma de pagamento
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        marginBottom="24px"
        marginLeft="1rem"
        marginRight="1rem"
      >
        <Grid item sm={12}>
          <Typography
            fontWeight="700"
            fontSize="1.2rem"
            sx={{ color: SECONDARY }}
          >
            Dados Cliente
          </Typography>
        </Grid>
        <Grid item xs={3.3}>
          <TextField
            label="Nome"
            variant="outlined"
            inputProps={{
              maxLength: 50,
            }}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const novoNome = event.target.value;
              setPedido({
                ...pedido,
                cliente: { ...pedido?.cliente, nome: novoNome },
              });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="CPF"
            variant="outlined"
            inputProps={{
              maxLength: 11,
            }}
            value={pedido.cliente.cpf}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const novoCpf = parseInt(event.target.value);
              setPedido({
                ...pedido,
                cliente: { ...pedido?.cliente, cpf: novoCpf },
              });
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        justifyContent="space-between"
        marginBottom="24px"
        marginLeft="1rem"
        marginRight="1rem"
      >
        <Grid item sm={12}>
          <Typography
            fontWeight="700"
            fontSize="1.2rem"
            sx={{ color: SECONDARY }}
          >
            Endereço Cliente
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="CEP"
            variant="outlined"
            fullWidth
            value={pedido.cliente.endereco.cep}
            inputProps={{
              maxLength: 8,
            }}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const novoCep = parseInt(event.target.value);
              setPedido({
                ...pedido,
                cliente: {
                  ...pedido.cliente,
                  endereco: { ...pedido.cliente.endereco, cep: novoCep },
                },
              });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Logradouro"
            variant="outlined"
            fullWidth
            inputProps={{
              maxLength: 100,
            }}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const novoLogradouro = event.target.value;
              setPedido({
                ...pedido,
                cliente: {
                  ...pedido.cliente,
                  endereco: {
                    ...pedido.cliente.endereco,
                    logradouro: novoLogradouro,
                  },
                },
              });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Número"
            variant="outlined"
            fullWidth
            inputProps={{
              maxLength: 4,
            }}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const novoNumero = parseInt(event.target.value);
              setPedido({
                ...pedido,
                cliente: {
                  ...pedido.cliente,
                  endereco: { ...pedido.cliente.endereco, numero: novoNumero },
                },
              });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Complemento"
            variant="outlined"
            fullWidth
            inputProps={{
              maxLength: 10,
            }}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const novoComplemento = event.target.value;
              setPedido({
                ...pedido,
                cliente: {
                  ...pedido.cliente,
                  endereco: {
                    ...pedido.cliente.endereco,
                    complemento: novoComplemento,
                  },
                },
              });
            }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        borderRadius="4px"
        direction="row"
        sm={12}
        marginLeft="1rem"
        marginRight="1rem"
        sx={{
          backgroundColor: SECONDARY,
          width: "80%",
          paddingBottom: "16px",
          paddingLeft: "16px",
        }}
      >
        {pedido?.refeicao.map((item) =>
          item.quantidadeRefeicao > 0 ? (
            <Grid
              container
              sx={{
                fontWeight: "500",
                fontSize: "1.5rem",
                color: PRIMARY,
              }}
            >
              <Grid item xs={6}>
                {item.nomeRefeicao}
              </Grid>
              <Grid item xs={3}>
                {item.quantidadeRefeicao}
              </Grid>
              <Grid item xs={3}>
                {formatarMoeda(item.valorRefeicao)}
              </Grid>
            </Grid>
          ) : (
            ""
          )
        )}
        <Grid
          container
          sx={{
            fontWeight: "500",
            fontSize: "1.5rem",
            color: PRIMARY,
          }}
        >
          <Grid item xs={11}>
            Valor Total
          </Grid>
          <Grid item xs={1}>
            {formatarMoeda(valorTotal)}
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} marginLeft="1rem" marginRight="1rem" marginTop="1rem">
        <Typography fontSize="1.2rem" color={SECONDARY} fontWeight="700">
          Selecione a forma de pagamento:
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            sx={{ alignItems: "flex-start", margin: "0px" }}
            aria-label="pagamento"
            name="radio-buttons-group"
            onChange={handleTipoPagamento}
            value={formaPagamentoSelecionada}
          >
            <FormControlLabel
              value={formaDePagamento.pix.codigo}
              label={
                <Typography
                  fontSize="1rem"
                  variant="h5"
                  color={
                    formaPagamentoSelecionada === formaDePagamento.pix.codigo
                      ? SECONDARY2
                      : SECONDARY
                  }
                >
                  Pix
                </Typography>
              }
              control={<Radio color="secondary" />}
              labelPlacement="end"
            />
            <FormControlLabel
              value={formaDePagamento.credito.codigo}
              label={
                <Typography
                  fontSize="1rem"
                  variant="h5"
                  color={
                    formaPagamentoSelecionada ===
                    formaDePagamento.credito.codigo
                      ? SECONDARY2
                      : SECONDARY
                  }
                >
                  Cartão de crédito
                </Typography>
              }
              control={<Radio color="secondary" />}
              labelPlacement="end"
            />
            <FormControlLabel
              value={formaDePagamento.debito.codigo}
              label={
                <Typography
                  fontSize="1rem"
                  variant="h5"
                  color={
                    formaPagamentoSelecionada === formaDePagamento.debito.codigo
                      ? SECONDARY2
                      : SECONDARY
                  }
                >
                  Cartão de débito
                </Typography>
              }
              control={<Radio color="secondary" />}
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
        {formaPagamentoSelecionada === formaDePagamento.pix.codigo && (
          <CardInformativo
            mensagem={
              "solariius@gmail.com  OU gabrielbbmatozinhos@gmail.com OU cminoves26@gmail.com"
            }
          />
        )}

        {(formaPagamentoSelecionada === formaDePagamento.credito.codigo ||
          formaPagamentoSelecionada === formaDePagamento.debito.codigo) && (
          <CardInformativo
            mensagem={
              "O entregador levará a máquina de cartão para a realização do pagamento."
            }
          />
        )}
      </Grid>
      <Grid
        container
        item
        sm={12}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        marginRight="1rem"
        marginBottom="1rem"
        marginTop="1rem"
      >
        <Button
          sx={{ color: PRIMARY, backgroundColor: SECONDARY, width: "150px" }}
          onClick={onClickFinalizar}
        >
          Finalizar
        </Button>
      </Grid>
      <Grid item>
        <ModalFinalizar
          modalAberto={modalAberto}
          handleFecharModal={handleFecharModal}
        />
      </Grid>
    </Grid>
  );
};

export default Pagamento;
