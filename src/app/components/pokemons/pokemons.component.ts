import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemon: Pokemon[] = [];
  pkms: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons()
      .subscribe((pokemon) => this.pokemon = pokemon.results);

    this.pkms = 0;
  }

  getIdPkm(url: string): string {
    return url.split('\/')[url.split('\/').length - 2];
  }

  loadMore() {
    this.pkms = this.pkms + 20;
    this.pokemonService.getAllPokemons(this.pkms)
      .subscribe((pokemon) => {
        this.pokemon = this.pokemon.concat(pokemon.results)
      });
  }
}
