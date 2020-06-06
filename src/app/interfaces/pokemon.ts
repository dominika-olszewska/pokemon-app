export interface PokemonSpecies {
  count: number;
  next: string;
  previous: string;
  results: PokemonsList[];
}

export interface PokemonsList {
  name: string;
  url: string;
  results?: any;
}

// export interface Pokemon {
//
// }
