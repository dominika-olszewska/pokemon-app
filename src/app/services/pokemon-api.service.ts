import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {PokemonSpecies} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) {
  }

  public getPokemons(offset: number, limit: number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species?offset=${offset}&limit=${limit}`);
  }

  public getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }
  public getPokemonById(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
