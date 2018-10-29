import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/models/Heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  heroes:Observable<Heroe[]>;

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe(nombre){
    // this.heroes = this.heroesSvc.buscarHeroes(nombre);
    // this.heroes.subscribe((h)=>console.log(h));
    console.log(nombre)
    this.router.navigate(['/buscar',nombre]);

  }

}
