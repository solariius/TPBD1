// aqui que fica as chamadas as apis

import axios from "axios";
import { IPedidoCompleto } from "../Shared/interfaces/IPedidoCompleto";
import { IRefeicao } from "../Shared/interfaces/IRefeicao";

class Repository {
  listarCardapio(refeicao: IRefeicao[]) {
    // axios.get("url", refeicao);
    return [
      {
        idRefeicao: 1,
        nomeRefeicao: "feijoada",
        descricaoRefeicao: "gostosa",
        valorRefeicao: 50,
        quantidadeRefeicao: 0,
        calorias: 450,
      },
      {
        idRefeicao: 2,
        nomeRefeicao: "lasanhaa",
        descricaoRefeicao: "gostosa",
        valorRefeicao: 55,
        quantidadeRefeicao: 0,
        calorias: 250,
      },
      {
        idRefeicao: 3,
        nomeRefeicao: "salada",
        descricaoRefeicao: "gostosa",
        valorRefeicao: 20,
        quantidadeRefeicao: 0,
        calorias: 454,
      },
    ];
  }

  listarPedidos(): IPedidoCompleto[] {
    // instancia numa variavel isso aq axios.get<IPedidoCompelto[]>("URL");

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
    //mudar essa string de acordo com o back
    // axios.post("http://localhost:3333/add", item);
    console.log("item adicionado com sucesso", item);
  }
  removerItemCardapio(item: IRefeicao) {
    // `http://www.appdomain.com/users/${VariavelAQUI}`
    // delete api rest caça no google axios.delete("URL", item);
    console.log("item removido com sucesso", item);
  }
  editarItemCardapio(item: IRefeicao) {
    // axios.put("URL",item);
    console.log("item editado com sucesso", item);
  }
  enviarPedido(pedido: IPedidoCompleto) {
    //  axios.post("URL",pedido);
    console.log("pedido enviad", pedido);
  }
}

export default new Repository();
