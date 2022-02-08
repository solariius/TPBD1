import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PedidoContexto } from "./context/globalContext";
import Cardapio from "./pages/cardapio/view/Cardapio";
import Edicao from "./pages/edicao/view/Edicao";
import Historico from "./pages/historico/view/Historico";
import Pagamento from "./pages/pagamento/view/Pagamento";
import { IPedidoCompleto } from "./Shared/interfaces/IPedidoCompleto";

function App() {
  const [pedido, setPedido] = useState<IPedidoCompleto>({
    idPedido: 0,
    cliente: {
      nome: "",
      cpf: undefined,
      endereco: {
        cep: undefined,
        logradouro: "",
        numero: undefined,
        complemento: "",
      },
    },
    refeicao: [],
    idFormaPagamento: 0,
  });
  return (
    <PedidoContexto.Provider value={{ pedido, setPedido }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cardapio />} />
          <Route path="pagamento" element={<Pagamento />} />
          <Route path="edicao" element={<Edicao />} />
          <Route path="historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </PedidoContexto.Provider>
  );
}

export default App;
