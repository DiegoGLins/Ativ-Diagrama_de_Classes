interface FormatoRetangulo {
    comprimento: number;
    largura: number;
    desenhar(): void;
    redimensionar(novoComprimento: number, novaLargura: number): void;
  }
  
  export class Retangulo implements FormatoRetangulo {
    constructor(public comprimento: number, public largura: number) {}
  
    desenhar():void {
      const perimetro = 2 *(this.comprimento + this.largura);
      console.log(`Desenhando o retangulo de perimetro: ${perimetro} mm`);
    }
  
    redimensionar(novoComprimento: number, novaLargura: number) {
      this.comprimento = novoComprimento;
      this.largura = novaLargura;
      console.log(
        `Redimensionado para o comprimento: ${novoComprimento}cm e largura: ${novaLargura} mm`
      );
    }
  }
  