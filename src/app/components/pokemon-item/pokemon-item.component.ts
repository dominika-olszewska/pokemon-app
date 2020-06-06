import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: any;

  constructor() {
  }

  ngOnInit() {
  }

  public getPokeImage(pokeId: string): any {
    return `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;
  }

}
