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
import { FC, useState } from "react";
import { PRIMARY, SECONDARY, SECONDARY2 } from "../../../config/theme";
import CardInformativo from "../../../Shared/cardInformativo/CardInformativo";
import { formaDePagamento } from "../../../Shared/constantes/Constantes";

interface PagamentoProps {
  refNomeCliente: React.Ref<HTMLInputElement>;
  refCPF: React.Ref<HTMLInputElement>;
  refCEP: React.Ref<HTMLInputElement>;
  refLogradouro: React.Ref<HTMLInputElement>;
  refNumero: React.Ref<HTMLInputElement>;
  refComplemento: React.Ref<HTMLInputElement>;
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

  return (
    <Grid
      container
      direction="column"
      rowSpacing={4}
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: PRIMARY }}
    >
      <Grid container item>
        <Grid item sm={12}>
          <Typography>Dados Cliente</Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            inputProps={{
              maxLength: 100,
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
              inputRef={refCPF}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item sm={12}>
          <Typography>Endereço Cliente</Typography>
        </Grid>
        <Grid item>
          <TextField
            label="CEP"
            variant="outlined"
            fullWidth
            inputProps={{
              maxLength: 250,
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
              maxLength: 250,
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
              maxLength: 250,
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
              maxLength: 250,
            }}
            inputRef={refComplemento}
          />
        </Grid>
      </Grid>

      <Grid
        item
        borderRadius="4px"
        direction="row"
        sx={{
          backgroundColor: SECONDARY,
          width: "1100px",
          paddingBottom: "16px",
          paddingLeft: "16px",
        }}
      >
        <Typography>
          INFORMAÇÕES DO PEDIDO VALOR TOTAL COM A LISTA DE TODOS OS ITENS
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize="1rem" color={SECONDARY}>
          Selecione a forma de pagamento:{" "}
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
      </Grid>
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
      <Grid item>
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
