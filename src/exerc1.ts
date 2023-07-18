import { Item } from "./model/Item";
import { Pedido } from "./model/Pedido";

const pedido = new Pedido();

const item1 = new Item(3500, "laptop Lenovo", "core I3, memoria RAM 16BG")

pedido.cadastrarItem(item1)

console.log(pedido)