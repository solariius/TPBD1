import React, { MouseEventHandler, useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ModalRemover from "./pages/edicao/components/ModalRemover";
import { Button } from "@mui/material";

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const handleFecharModal = useCallback(() => setModalAberto(false), []);

  const handleConfirmarModal = useCallback(() => {
    setModalAberto(false);
    console.log("CONFIRMA");
  }, []);

  const onClickModal: MouseEventHandler<HTMLButtonElement> = () => {
    setModalAberto(true);
  };
  return (
    <div className="App">
      <Button onClick={onClickModal}>clique</Button>

      <ModalRemover
        modalAberto={modalAberto}
        handleFecharModal={handleFecharModal}
        handleConfirmarModal={handleConfirmarModal}
      />
    </div>
  );
}

export default App;
