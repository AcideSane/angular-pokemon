import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon, Stats} from './pokemon';

@Injectable()
export class PokemonService {
   private pokemonSeleccionado = new BehaviorSubject(null);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http : HttpClient) { 

  }

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.apiUrl + '?limit=151');
  }

  setPokemon(pokemon): void {    
    this.pokemonSeleccionado.next(pokemon);
  }
}