import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsListComponent} from './components/pokemons-list/pokemons-list.component';
import {PokemonPageComponent} from './pages/pokemon-page/pokemon-page.component';
import {PokeballPageComponent} from './pages/pokeball-page/pokeball-page.component';

const routes: Routes = [
  {
    path: '', component: PokemonsListComponent,
  },
  {
    path: 'pokemon/:id', component: PokemonPageComponent,
  },
  {
    path: 'pokeball', component: PokeballPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
