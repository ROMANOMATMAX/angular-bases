import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h3>La base es <strong>{{base}}</strong></h3>
    <button (click)="acumular(base)">+{{base}}</button>
    <p>{{numero}}</p>
    <button (click)="acumular(-base)">-{{base}}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Mi Primer componente';
    base: number = 5;
    numero: number = 0;
    acumular(cantidad: number) {
      this.numero += cantidad;
    };
}