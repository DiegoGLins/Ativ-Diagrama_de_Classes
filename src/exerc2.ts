import { Circulo } from "./model/Circulo";
import { Retangulo } from "./model/Retangulo";


    const circulo = new Circulo(30);

    circulo.desenhar();
    circulo.redimensionar(45);

    const retangulo = new Retangulo(30, 50);
    retangulo.desenhar();
    retangulo.redimensionar(60, 100);
    

    console.log(circulo)
    console.log(retangulo)
