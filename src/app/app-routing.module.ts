import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsListComponent} from './components/pokemons-list/pokemons-list.component';
import {PokemonPageComponent} from './pages/pokemon-page/pokemon-page.component';

const routes: Routes = [
  {
    path: '', component: PokemonsListComponent,
  },
  {
    path: 'pokemon/:id', component: PokemonPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
