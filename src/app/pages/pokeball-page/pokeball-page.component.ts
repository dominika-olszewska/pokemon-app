import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from '../../services/session-storage.service';
import {PokemonApiService} from '../../services/pokemon-api.service';
import {NotificationService} from '../../services/notifications.service';

@Component({
  selector: 'app-pokeball-page',
  templateUrl: './pokeball-page.component.html',
  styleUrls: ['./pokeball-page.component.scss']
})
export class PokeballPageComponent implements OnInit {
  pokeIds: any[];
  pokemons: any[] = [];

  constructor(
    private sessionStorageService: SessionStorageService,
    private pokemonApiService: PokemonApiService,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.pokeIds = this.getElementsFromStorage('pokeIds');
    this.pokeIds.forEach(id => {
      this.getPokemonById(id);
    });
  }


  public getPokemonById(id: any): any {
    this.pokemonApiService.getPokemonById(id).subscribe(pokemon => {
      this.pokemons.push(pokemon);
    });
  }

  public getElementsFromStorage(keyInStorage): any[] {
    let elements = this.sessionStorageService.getItem(keyInStorage) || [];
    if (elements && (typeof elements) !== 'object') {
      elements = JSON.parse(elements);
    }
    return elements;
  }

  public deleteFromSessionStorage(poke, keyInStorage): void {
    this.pokemons = this.pokemons.filter(pokeFromStorage => {
      if (poke.id && poke.id !== '') {
        return pokeFromStorage.id !== poke.id;
      }
    });
    const newPokeIds = this.pokemons.map(pokemon => pokemon.id);
    this.sessionStorageService.addToSessionStorage(keyInStorage, JSON.stringify(newPokeIds));
  }

  public deleteFromList(pokemon: any): void {
    this.deleteFromSessionStorage(pokemon, 'pokeIds');
    this.notificationService.popToastWarning(`You have deleted ${pokemon.name} from your favorite pokemons list`);
  }

  private trackByFn(index): number {
    return index;
  }
}
