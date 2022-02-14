import axios from "axios";
import { IPedidoCompleto } from "../Shared/interfaces/IPedidoCompleto";
import { IRefeicao } from "../Shared/interfaces/IRefeicao";

class Repository {
  async listarCardapio(): Promise<IRefeicao[]> {
    const response = await axios.get("http://localhost:3333/");
    return response.data;
  }

  async listarPedidos(): Promise<IPedidoCompleto[]> {
    const response = await axios.get("http://localhost:3333/");
    return response.data;
  }

  async inserirItemCardapio(item: IRefeicao) {
    const response = await axios.post("http://localhost:3333/", {
      name: item.nomeRefeicao,
      description: item.descricaoRefeicao,
      calories: item.calorias,
      price: item.valorRefeicao,
      quantity: item.quantidadeRefeicao,
    });
    return response.data;
  }

  async removerItemCardapio(item: IRefeicao) {
    const response = await axios.delete(
      `http://localhost:3333/${item.idRefeicao}`
    );
    return response.data;
  }

  async editarItemCardapio(item: IRefeicao) {
    const response = await axios.put(
      `http://localhost:3333/${item.idRefeicao}`,
      {
        name: item.nomeRefeicao,
        description: item.descricaoRefeicao,
        calories: item.calorias,
        price: item.valorRefeicao,
        quantity: item.quantidadeRefeicao,
      }
    );
    return response.data;
  }

  async enviarPedido(pedido: IPedidoCompleto) {
    const response = await axios.post(
      "http://localhost:3333/",
      pedido.idPedido
    );
    return response.data;
  }
}

export default new Repository();
