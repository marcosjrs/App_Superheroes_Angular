import { Injectable } from '@angular/core';
import Heroes from '../fixtures/data.js';
import { of, Observable } from 'rxjs';
import { Heroe } from '../models/Heroe.js';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getHeroes():Observable<Heroe[]> {
    return of(Heroes); //con "of" devolverá un observable con el array de Heroe.js
  }
}
