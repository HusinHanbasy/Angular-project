import { CartItem } from './cartItem';

export class Cart {
  items: CartItem[] = [];
  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((el) => {
      totalPrice += el.price;
    });
    return totalPrice;
  }
}
