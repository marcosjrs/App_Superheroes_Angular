import { Injectable } from '@angular/core';
import Heroes from '../fixtures/data.js';
import { of, Observable } from 'rxjs';
import { Heroe } from '../models/Heroe.js';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getHero(index):Observable<Heroe>{
    return of(Heroes[index]);
  }

  getHeroes():Observable<Heroe[]> {
    return of(Heroes); //con "of" devolverá un observable con el array de Heroe.js
  }

  buscarHeroes(nombre){
    nombre = nombre.toLowerCase();
    let heroesFiltrados = Heroes.filter( (h)=>(h.nombre.toLowerCase().indexOf(nombre) >= 0) );
    console.log(heroesFiltrados);
    return of( heroesFiltrados ); //con "of" devolverá un observable con el array de Heroe.js
  }
}
