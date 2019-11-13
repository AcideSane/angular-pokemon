import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon, Stats} from './pokemon';

@Injectable()
export class PokemonService {
  
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http : HttpClient) { }
  
    getPokemon(url:string = this.apiUrl){
    return this.http.get<Pokemon[]>(url + '?limit=151');
  }
  
}