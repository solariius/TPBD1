// lista com todos os itens e valor
// somatório dos valores
// forma de pagamento (pix, credito/debito) com mensagem
// botão finalizar q abre o modal de finalizaçao

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
import { ChangeEvent, FC, useState } from "react";
import { PRIMARY, SECONDARY, SECONDARY2 } from "../../../config/theme";
import { usePedidoContexto } from "../../../context/globalContext";
import CardInformativo from "../../../Shared/cardInformativo/CardInformativo";
import { formaDePagamento } from "../../../Shared/constantes/Constantes";
import { formatarMoeda } from "../../../Shared/Utils";

interface PagamentoProps {
  refNomeCliente?: React.Ref<HTMLInputElement>;
  refCPF?: React.Ref<HTMLInputElement>;
  refCEP?: React.Ref<HTMLInputElement>;
  refLogradouro?: React.Ref<HTMLInputElement>;
  refNumero?: React.Ref<HTMLInputElement>;
  refComplemento?: React.Ref<HTMLInputElement>;
}
const Pagamento: FC<PagamentoProps> = ({
  refNomeCliente,
  refCPF,
  refCEP,
  refLogradouro,
  refNumero,
  refComplemento,
}) => {
  const [formaPagamentoSelecionada, setFormaPagamentoSelecionada] =
    useState<number>(1);

  const handleTipoPagamento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormaPagamentoSelecionada(parseInt(event.target.value));
  };

  const { nome, setNome } = useState("");
  const { cpf, setCpf } = useState(0);
  const { endereco, setEndereco } = useState({
    cep: 32315040,
    logradouro: "",
    numero: 0,
    complemento: "apto 00",
  });

  const { pedido, setPedido } = usePedidoContexto();

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
        <Grid item>
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
            Dados Cliente
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            inputProps={{
              maxLength: 50,
            }}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const nome = event.target.value;
              if (nome) setNome(nome);
            }}
            inputRef={refNomeCliente}
          />
          <Grid item>
            <TextField
              label="CPF"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 11,
              }}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                const cpf = event.target.value;
                if (cpf) setCpf(cpf);
              }}
              inputRef={refCPF}
            />
          </Grid>
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
            inputProps={{
              maxLength: 8,
            }}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const cep = event.target.value;
              if (cep) setEndereco({ ...endereco, cep });
            }}
            inputRef={refCEP}
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
              const logradouro = event.target.value;
              if (logradouro) setEndereco({ ...endereco, logradouro });
            }}
            inputRef={refLogradouro}
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
              const numero = event.target.value;
              if (numero) setEndereco({ ...endereco, numero });
            }}
            inputRef={refNumero}
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
              const complemento = event.target.value;
              if (complemento) setEndereco({ ...endereco, complemento });
            }}
            inputRef={refComplemento}
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
        {pedido?.refeicao.map((item) => (
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
        ))}
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
          sx={{ color: "black", backgroundColor: SECONDARY, width: "150px" }}
        >
          Finalizar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Pagamento;
