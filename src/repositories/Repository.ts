// aqui que fica as chamadas as apis

import { IPedidoCompleto } from "../Shared/interfaces/IPedidoCompleto";
import { IRefeicao } from "../Shared/interfaces/IRefeicao";

class Repository {
  listarCardapio(): IRefeicao[] {
    return [
      {
        idRefeicao: 1,
        nomeRefeicao: "feijoada",
        descricaoRefeicao: "gostosa",
        valorRefeicao: 50,
        quantidadeRefeicao: 1,
        calorias: 450,
      },
      {
        idRefeicao: 2,
        nomeRefeicao: "lasanhaa",
        descricaoRefeicao: "gostosa",
        valorRefeicao: 50,
        quantidadeRefeicao: 1,
        calorias: 250,
      },
      {
        idRefeicao: 3,
        nomeRefeicao: "salada",
        descricaoRefeicao: "gostosa",
        valorRefeicao: 50,
        quantidadeRefeicao: 1,
        calorias: 454,
      },
    ];
  }
  inserirItemCardapio(item: IRefeicao) {
    console.log("item adicionado com sucesso", item);
  }
  removerItemCardapio(item: IRefeicao) {
    console.log("item removido com sucesso", item);
  }
  editarItemCardapio(item: IRefeicao) {
    console.log("item editado com sucesso", item);
  }
}

export default new Repository();
