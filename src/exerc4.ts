import { ComidaPorKilo } from "./model/ComidaPorKilo";

const pedido1 = new ComidaPorKilo(35, 0.5);
const pedido2 = new ComidaPorKilo(35, 0.3);
const pedido3 = new ComidaPorKilo(35, 0.7);

const historico: ComidaPorKilo[] = [];

function historicoPedidos() {
  historico.push(pedido1, pedido2, pedido3);
  console.log(historico);
}

historicoPedidos();

function somaPedidos() {
  const valor = historico.map((item) => item.valorTotalRefeicao);
  const soma = valor.reduce((acc, current) => (acc += current));
  const qtdPedidos = historico.map((item)=> item.numRefeicoesVendidas).reduce((acc,current)=>acc+=current)
  console.log(`Total de ${qtdPedidos} refeicoes no valor total de: R$${soma.toFixed(2)} reais`)
}

somaPedidos()
