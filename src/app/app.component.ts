import { Component } from '@angular/core';
import {ROUTE_ANIMATIONS} from './common/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ ROUTE_ANIMATIONS ],
})
export class AppComponent {
  title = 'pokemonApp';
}
