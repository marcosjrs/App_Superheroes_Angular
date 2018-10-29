import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/models/Heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:Heroe;

  constructor(private router:Router, 
              private activateRoute:ActivatedRoute,
              private heroesSvc:HeroesService) { }

  ngOnInit() {
    const id = +(this.activateRoute.snapshot.params["id"]);
    this.heroesSvc.getHero(id).subscribe(h => this.heroe = h);
  }

}
