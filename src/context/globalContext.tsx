import React, { Dispatch, SetStateAction, useContext } from "react";
import { IPedidoCompleto } from "../Shared/interfaces/IPedidoCompleto";

interface IPedidoContexto {
  setPedido?: Dispatch<SetStateAction<IPedidoCompleto | undefined>>;
  pedido?: IPedidoCompleto;
}

export const PedidoContexto = React.createContext<IPedidoContexto>({
  setPedido: () => {},
});

export const usePedidoContexto = () => useContext(PedidoContexto);
