import { Movies } from './movie';

export class CartItem {
  constructor(movie: Movies) {
    this.movie = movie;
    this.price;
  }
  movie: Movies;
  quantity: number = 1;
  get price(): number {
    return this.movie.price * this.quantity;
  }
}
