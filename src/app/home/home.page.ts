import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonList: any[] = [];  // Lista de pokemones
  pokemon: any = null;      // Pokémon seleccionado (por defecto, null)
  
  constructor(private http: HttpClient) {
    this.fetchPokemonList();
  }

  fetchPokemonList() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .subscribe((data: any) => {
        this.pokemonList = data.results;
      });
  }

  fetchPokemonDetails(url: string) {
    this.http.get(url)
      .subscribe((data: any) => {
        this.pokemon = data;  // Asigna los detalles del Pokémon seleccionado
      });
  }
}
