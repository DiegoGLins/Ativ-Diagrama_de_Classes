import { Pedido, ItemPedido } from "./model/ItemPedido"


const pedido = new Pedido()

const item1 = new ItemPedido(120,"camiseta",1)
const item2 = new ItemPedido(89.90, "Bermuda jeans", 1)
const item3 = new ItemPedido(169.90, "calça jeans",1)
const item4 = new ItemPedido(640, "tenis nike",1)

pedido.add(item1)
pedido.add(item2)
pedido.add(item3)
pedido.add(item4)

item1.aplicarDescontoEmReais(10)
item3.aplicarDescontoEmPorcentagem(5)
pedido.removeItem("tenis nike")
pedido.removeItem("calça jeans")


pedido.recuperarValorTotal()



console.log(pedido)
