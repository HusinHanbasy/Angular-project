import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Movies } from '../shared/models/movie';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(movie: Movies): void {
    let cartItem = this.cart.items.find((item) => item.movie.id === movie.id);
    if (cartItem) {
      this.changeQuantity(movie.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(movie));
  }

  removeFromCart(movieId: number): void {
    this.cart.items = this.cart.items.filter((el) => el.movie.id != movieId);
  }

  changeQuantity(quantity: number, movieId: number): void {
    let cartItem = this.cart.items.find((el) => el.movie.id === movieId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }

  constructor() {}
}
