import { ICliente } from "./ICliente";
import { IRefeicao } from "./IRefeicao";

export interface IPedidoCompleto {
  idPedido: number;
  cliente: ICliente;
  refeicao: IRefeicao[];
  idFormaPagamento: number;
  
}
