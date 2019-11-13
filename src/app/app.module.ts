import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsdetailsComponent } from './pokemonsdetails/pokemonsdetails.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PokedexComponent, PokemonsComponent, PokemonsdetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PokemonService]
})
export class AppModule { }
