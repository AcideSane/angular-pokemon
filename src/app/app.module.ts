import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsdetailsComponent } from './pokemonsdetails/pokemonsdetails.component';
import { PokemonService } from './pokemon.service';

const routes: Routes = [
  { path: "", component: PokemonsComponent },
  { path: "pokemons/:pokemonId", component: PokemonsdetailsComponent },
  { path: "pokemons", component: PokemonsComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, PokedexComponent, PokemonsComponent, PokemonsdetailsComponent ],
  bootstrap:    [ AppComponent,PokemonsdetailsComponent ],
  providers: [PokemonService],
  exports: [ RouterModule ]
})
export class AppModule { }
