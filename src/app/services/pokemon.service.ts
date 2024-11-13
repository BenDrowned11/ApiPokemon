import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${name}`);
  }

  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}&offset=${offset}`);
  }

  getTypes(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/type');
  }

  getAbilities(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/ability');
  }

  getEvolutionChain(id: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
  }
}
