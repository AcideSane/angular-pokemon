import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, Stats } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  idPokemonSeleccionado: number;
  pokemonSeleccionado: Pokemon;

  constructor(private route: ActivatedRoute, private PokemonService: PokemonService) { }

  ngOnInit() {
  }

}