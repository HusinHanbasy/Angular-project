import { Component, OnInit } from '@angular/core';
import { Movies } from '../shared/models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  movie!: Movies;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.movie = movieService.getMovieById(params['id']);
    });
  }
  ngOnInit(): void {}
  addToCart() {
    this.cartService.addToCart(this.movie);
    this.router.navigateByUrl('cart-page');
  }
}
