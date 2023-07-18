export class ComidaPorKilo {
  public valorTotalRefeicao: number;
  public numRefeicoesVendidas: number;

  constructor(public valorPorKgPrato: number, public pesoDoPratoKg: number) {
    this.pesoDoPratoKg = pesoDoPratoKg;
    this.valorTotalRefeicao = valorPorKgPrato * pesoDoPratoKg;
    this.numRefeicoesVendidas = 1;
  }

  public imprimeValorRefeicao() {
    this.valorTotalRefeicao;
    this.numRefeicoesVendidas
    console.log(this.valorTotalRefeicao);
  }

}
