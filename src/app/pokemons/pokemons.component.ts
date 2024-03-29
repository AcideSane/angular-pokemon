import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons:Pokemon[];

  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

 selectPokemon(pokemon:Pokemon) {
    this.PokemonService.setPokemon(pokemon);
  }

  getPokemons(): void {
  this.PokemonService.getPokemons()
                    .subscribe(dados => {this.pokemons = dados.results;});
                  }
}