import axios from "axios";
import { IPedidoCompleto } from "../Shared/interfaces/IPedidoCompleto";
import { IRefeicao } from "../Shared/interfaces/IRefeicao";

class Repository {
  async listarCardapio(): Promise<IRefeicao[]> {
    const response = await axios.get("http://localhost:3333/");
    return response.data;
  }

  async listarPedidos(): Promise<IPedidoCompleto[]> {
    // instancia numa variavel isso aq axios.get<IPedidoCompelto[]>("URL");
    // const response = axios.get("http://localhost:3333/");
    // return response.data;
    return [
      {
        idPedido: 12,

        cliente: {
          nome: "Amanda",
          cpf: 13967450686,
          endereco: {
            cep: 32315040,
            logradouro: "José faria",
            numero: 1900,
            complemento: "402",
          },
        },
        refeicao: [
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
            nomeRefeicao: "aiai",
            descricaoRefeicao: "gostosa",
            valorRefeicao: 40,
            quantidadeRefeicao: 1,
            calorias: 440,
          },
          {
            idRefeicao: 3,
            nomeRefeicao: "dsf",
            descricaoRefeicao: "gostosa",
            valorRefeicao: 32,
            quantidadeRefeicao: 1,
            calorias: 20,
          },
        ],
        idFormaPagamento: 1,
      },
    ];
  }

  inserirItemCardapio(item: IRefeicao) {
    axios.post("http://localhost:3333/", {
      name: item.nomeRefeicao,
      description: item.descricaoRefeicao,
      calories: item.calorias,
      price: item.valorRefeicao,
      quantity: item.quantidadeRefeicao,
    });
    console.log("item adicionado com sucesso", item);
  }
  removerItemCardapio(item: IRefeicao) {
    axios.delete(`http://localhost:3333/${item.idRefeicao}`);

    console.log("item removido com sucesso", item);
  }
  editarItemCardapio(item: IRefeicao) {
    axios.put(`http://localhost:3333/${item.idRefeicao}`, {
      name: item.nomeRefeicao,
      description: item.descricaoRefeicao,
      calories: item.calorias,
      price: item.valorRefeicao,
      quantity: item.quantidadeRefeicao,
    });
    console.log("item editado com sucesso", item);
  }
  enviarPedido(pedido: IPedidoCompleto) {
    axios.post("http://localhost:3333/", pedido.idPedido);
    console.log("pedido enviad", pedido);
  }
}

export default new Repository();
