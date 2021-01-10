import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResult, PokemonDetail } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemons(pkms?: number): Observable<ListResult> {
    if (!pkms) {
      pkms = 0;
    }
    return this.http.get<ListResult>('https://pokeapi.co/api/v2/pokemon?offset=' + pkms + '&limit=20');
  }

  getPokemonById(id: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}
