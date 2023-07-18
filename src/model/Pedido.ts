import { Item } from "./Item";

export class Pedido {
    itens: Item[] = [];
    valortotal: number | undefined

cadastrarItem(item: Item): void{
    this.itens.push(item)
}
}

