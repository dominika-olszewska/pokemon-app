import {Component, OnInit} from '@angular/core';
import {PokemonApiService} from '../../services/pokemon-api.service';
import {Observable, of} from 'rxjs';
import {PokemonsList, PokemonSpecies} from '../../interfaces/pokemon';
import {ListsStateService} from '../../services/list-state.service';
import {NotificationService} from '../../services/notifications.service';
import {map, tap} from 'rxjs/operators';
import {SessionStorageService} from '../../services/session-storage.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  pokemnonList: PokemonsList[];
  list: PokemonSpecies;
  list$: Observable<any>;


  constructor(
    private pokemonApiService: PokemonApiService,
    private listStateService: ListsStateService,
    private sessionStorageService: SessionStorageService,
  ) {
    this.list$ = listStateService.list$;
  }

  public ngOnInit(): void {
    this.getPokeList();
  }

  public getPokeList(offset = 0, limit = 12): void {
    if (this.sessionStorageService.getFromSessionStorage('offset')) {
      offset = this.sessionStorageService.getFromSessionStorage('offset');
      limit = this.sessionStorageService.getFromSessionStorage('limit');
    } else {
      this.sessionStorageService.addToSessionStorage('offset', `${offset}`);
      this.sessionStorageService.addToSessionStorage('limit', `${limit}`);
    }
    this.getPokemonsFromApi(offset, limit);
  }

  public getPokemonsFromApi(offset: number, limit: number): void {
    this.pokemonApiService.getPokemons(offset, limit).subscribe(species => {
      this.list = species;
      this.pokemnonList = species.results;
      this.listStateService.setList(this.pokemnonList);
      this.pokemnonList.forEach(pokemon => {
        this.getPokemon(pokemon);
      });
    });
  }

  public getPokemon(pokemonData: any): any {
    this.pokemonApiService.getPokemon(pokemonData.url).subscribe(pokemon => {
      this.pokemnonList.forEach(poke => {
        if (poke.name === pokemon.name) {
          Object.assign(poke, pokemon);
        }
      });
      this.listStateService.setList(this.pokemnonList);
    });
  }

  public getNextSet(): any {
    const limit = this.sessionStorageService.getFromSessionStorage('limit');
    let offset = this.sessionStorageService.getFromSessionStorage('offset');
    offset = parseInt(offset, 0) + parseInt(limit, 0) + 1;
    if (this.list && this.list.next) {
      this.sessionStorageService.addToSessionStorage('offset', `${offset}`);
      this.getPokemonsFromApi(offset, limit);
    }
  }

  public getPrevSet(): any {
    const limit = this.sessionStorageService.getFromSessionStorage('limit');
    let offset = this.sessionStorageService.getFromSessionStorage('offset');
    offset = parseInt(offset, 0) - parseInt(limit, 0) - 1;
    if (this.list && this.list.previous) {
      this.sessionStorageService.addToSessionStorage('offset', `${offset}`);
      this.getPokemonsFromApi(offset, limit);
    }
  }


}
