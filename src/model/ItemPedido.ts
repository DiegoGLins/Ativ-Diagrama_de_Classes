
interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: string): void;
}

export class ItemPedido implements ValorPedido, Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }
  removeItem(item: string): void{
    this.nome = item
  }
    
  
  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }
}

export class Pedido implements ValorPedido {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.itens.forEach((item) => {
      item.aplicarDescontoEmReais(desconto);
    });
  }

  removeItem(item: string) {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  recuperarValorTotal(): number {
    let total = this.itens.map((i) => i.recuperarValorTotal()).reduce((sum, v) => sum + v, 0);
    return total;
  }
}

