import { FC, useEffect, useState } from "react";
import Repository from "../../../repositories/Repository";
import { IPedidoCompleto } from "../../../Shared/interfaces/IPedidoCompleto";
import CardPedido from "../components/CardPedido";

const Historico: FC = () => { 
  const [pedido, setPedido] = useState<IPedidoCompleto[]>([]);

  useEffect(() => {
    setPedido(Repository.listarPedidos());
  }, []);
  return (
    {pedido.length &&
        pedido.map((pedido) => 
        (<CardPedido 
          nomeCliente={pedido.cliente.nome} 
          cpfCliente={pedido.cliente.cpf} />))}
  );
};

export default Historico;
