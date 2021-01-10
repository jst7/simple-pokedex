import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: PokemonDetail;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("identifier ->", identifier);

    this.pokemonService.getPokemonById(identifier).subscribe(
      (pkm) => {
        if (!pkm) {
          return this.router.navigateByUrl('/');
        }

        this.pokemon = pkm;
        console.log("pokemon --> ", this.pokemon)
      }
    )
  }
}
