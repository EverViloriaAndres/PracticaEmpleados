import { Lexer } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrimerServicioService {
  constructor() {}

  metodoDelServicio(mensaje: string) {
    alert(mensaje);
    alert(
      'El mensaje anterios, fuen uno que produce el metodo que esta en el archivo que usamos como servicio,'
    );
    alert(
      'Es decir, acabo de consumir el primer servicio, o lo que es lo mismo, acabo de hacer  la primera inyeccion de dependencias'
    );
  }
}
