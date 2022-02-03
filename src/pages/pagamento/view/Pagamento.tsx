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
} from "@mui/material";
import { FC, useState } from "react";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import CardInformativo from "../../../Shared/cardInformativo/CardInformativo";
import { formaDePagamento } from "../../../Shared/constantes/Constantes";

const Pagamento: FC = () => {
  const [formaPagamentoSelecionada, setFormaPagamentoSelecionada] =
    useState<number>(1);

  const handleTipoPagamento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormaPagamentoSelecionada(parseInt(event.target.value));
  };

  return (
    <Grid
      container
      item
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: PRIMARY }}
    >
      <Grid item>
        <Typography>
          INFORMAÇÕES DO PEDIDO COMO ENDEREÇO, NOME CLIENTE E VALOR TOTAL COM A
          LISTA DE TODOS OS ITENS
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize="2rem" color={SECONDARY}>
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
                  variant="h5"
                  color={
                    formaPagamentoSelecionada === formaDePagamento.pix.codigo
                      ? "secondary"
                      : "primary"
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
                  variant="h5"
                  color={
                    formaPagamentoSelecionada ===
                    formaDePagamento.credito.codigo
                      ? "secondary"
                      : "primary"
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
                  variant="h5"
                  color={
                    formaPagamentoSelecionada === formaDePagamento.debito.codigo
                      ? "secondary"
                      : "primary"
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
