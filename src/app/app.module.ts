import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonsListComponent} from './components/pokemons-list/pokemons-list.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    HeaderComponent,
    PokemonItemComponent,
    PokemonPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
