interface FormatoCirculo {
    raio: number;
    desenhar(): void;
    redimensionar(novoRaio: number): void;
  }

  export class Circulo implements FormatoCirculo {
    constructor(public raio: number){
    }

    desenhar(): void {
        const circunferencia = 2*3.14 *this.raio
        console.log(`Desenhando o círculo de circunferência de: ${circunferencia} mm`)
    }
    redimensionar(novoRaio: number):void{
        this.raio = novoRaio;
        console.log(`O raio do circulo é: ${this.raio}`);
    }
  }