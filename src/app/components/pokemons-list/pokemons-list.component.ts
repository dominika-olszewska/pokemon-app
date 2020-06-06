import {Component, OnInit} from '@angular/core';
import {PokemonApiService} from '../../services/pokemon-api.service';
import {Observable} from 'rxjs';
import {PokemonsList, PokemonSpecies} from '../../interfaces/pokemon';
import {ListsStateService} from '../../services/list-state.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  pokemnonList: PokemonsList[];
  list$: Observable<any>;


  constructor(private pokemonApiService: PokemonApiService, private listStateService: ListsStateService) {
    this.list$ = listStateService.list$;
  }

  public ngOnInit(): void {
    this.getPokeList();
  }

  public getPokeList(): void {
    this.pokemonApiService.getPokemnons().subscribe(species => {
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




}
