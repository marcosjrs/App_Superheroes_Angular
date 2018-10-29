import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/models/Heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$:Observable<Heroe[]>;

  constructor(private heroesSvc:HeroesService) { }

  ngOnInit() {
    this.heroes$ = this.heroesSvc.getHeroes();
  }

}
