import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spider Man', 'Iron Man', 'Hulk', 'Thor', 'Black Widow'];
  heroeBorrado: string = '';
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
