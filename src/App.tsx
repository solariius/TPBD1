import { useState } from "react";
import "./App.css";
import { PedidoContexto } from "./context/globalContext";
import Cardapio from "./pages/cardapio/view/Cardapio";
import Edicao from "./pages/edicao/view/Edicao";
import Historico from "./pages/historico/view/Historico";
import Pagamento from "./pages/pagamento/view/Pagamento";
import { IPedidoCompleto } from "./Shared/interfaces/IPedidoCompleto";

function App() {
  const [pedido, setPedido] = useState<IPedidoCompleto>();
  return (
    <PedidoContexto.Provider value={{ pedido, setPedido }}>
      <Pagamento />
    </PedidoContexto.Provider>
  );
}

export default App;
