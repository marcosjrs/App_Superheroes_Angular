import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/models/Heroe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$:Observable<Heroe[]>;
  termino:string;

  constructor(private heroesSvc:HeroesService, private route:ActivatedRoute) { }

  ngOnInit() {    
    this.heroes$ = this.heroesSvc.getHeroes();
    const termino = this.route.params.subscribe(
      (parametro)=>{
        this.termino = parametro["termino"];
        if(this.termino){
          this.heroes$ = this.heroesSvc.buscarHeroes(this.termino);
        }else{
          this.heroes$ = this.heroesSvc.getHeroes();
        }
      }
    );
  }

}
