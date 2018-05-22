import { Component } from '@angular/core';
/* Podrzedne komponenty zajmuja sie wyswietlaniem i przyjmowaniem taskow,
ale nie wykonuja zadnej pracy, tym zajmuje sie glowny komponent,
glowny komponent odbiera wszytskie eventy z podrzednych komponentow */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {


}
