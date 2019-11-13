import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, Stats } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemonsdetails',
  templateUrl: './pokemonsdetails.component.html',
  styleUrls: ['./pokemonsdetails.component.css']
})
export class PokemonsdetailsComponent implements OnInit {
  idPokemonSeleccionado: number;
  pokemonSeleccionado: Pokemon;

  constructor(private route: ActivatedRoute, private PokemonService: PokemonService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => (this.idPokemonSeleccionado = +params.get("pokemonId"))
    );

    this.PokemonService.getPokemonById(this.idPokemonSeleccionado)
          .subscribe(Pokemon => {this.pokemonSeleccionado = Pokemon;
          console.log(this.pokemonSeleccionado);});
  }

}