// aqui que fica as chamadas as apis

interface ItemCardapio {
  nome: string;
  valor: number;
  descricao: string;
}
class Repository {
  listarCardapio(): ItemCardapio[] {
    return [{ nome: "feijoada", valor: 50, descricao: "gostoso" }];
  }
  inserirItemCardapio(item: ItemCardapio) {
    console.log("item adicionado com sucesso", item);
  }
  removerItemCardapio(item: ItemCardapio) {
    console.log("item removido com sucesso", item);
  }
  editarItemCardapio(item: ItemCardapio) {
    console.log("item editado com sucesso", item);
  }
}

export default Repository;
