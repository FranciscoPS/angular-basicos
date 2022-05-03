import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = [ 'Spider-man', 'Iron-man', 'Hulk', 'Thor', 'Capitan América' ];
  heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
