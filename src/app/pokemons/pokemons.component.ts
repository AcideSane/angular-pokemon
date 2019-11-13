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
  pageOfItems: Array<any>;

  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(){
  this.PokemonService.getPokemon()
                    .subscribe(dados => {this.pokemons = dados.results;});
                  }
}