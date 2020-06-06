import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListsStateService} from '../../services/list-state.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PokemonApiService} from '../../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  pokeId: string;
  list$: Observable<any>;
  pokemon: any;

  constructor(private activatedRoute: ActivatedRoute, private listStateService: ListsStateService, private pokemonApiService: PokemonApiService) {
    this.list$ = listStateService.list$;
  }

  ngOnInit() {
    this.pokeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.getPokemonById(this.pokeId);


  }

  public getPokemonById(id: any): any {
    this.pokemonApiService.getPokemonById(id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

}
