// lista com todos os itens e valor
//somatório dos valores
//forma de pagamento (pix, credito/debito) com mensagem
//botão finalizar q abre o modal de finalizaçao

import {
  FormControlLabel,
  FormControl,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
import { FC } from "react";

const Pagamento: FC = () => {
  return (
    <Grid container item>
      <Typography>Selecione a forma de pagamento: </Typography>
      <Grid item>
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
                    formaPagamentoSelecionada ===
                    formaDePagamento.pix.codigo
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
              'solariius@gmail.com'
              ''
            }
        />
      )}

      {(formaPagamentoSelecionada === formaDePagamento.credito.codigo ||
        formaPagamentoSelecionada === formaDePagamento.debito.codigo) && (
        
          <CardInformativo mensagem={'O entregador levará a máquina de cartão para a realização do pagamento.'} />
        
      )}

      <Button>Finalizar</Button>
    </Grid>
  );
};

export default Pagamento;
