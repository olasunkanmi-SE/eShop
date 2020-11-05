import { Component, OnInit } from '@angular/core';

export interface Cart {
  productName: string;
  productImage: string;
  productOwner: string;
  quantity: number;
  price: number;
}
@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.scss'],
})
export class DisplayCartComponent implements OnInit {
  cart: Cart[] = [
    {
      productName: 'DualShock 4 Wireless Controller for PlayStation 4',
      productImage:
        'https://m.media-amazon.com/images/I/71vLZWwluoL._AC_AA180_.jpg',
      productOwner: 'Raymond',
      quantity: 1,
      price: 45.99,
    },

    {
      productName: 'DualShock 4 Wireless Controller for PlayStation 4',
      productImage:
        'https://m.media-amazon.com/images/I/71vLZWwluoL._AC_AA180_.jpg',
      productOwner: 'Raymond',
      quantity: 1,
      price: 45.99,
    },
  ];

  dataSource = this.cart;
  constructor() {}

  ngOnInit(): void {}
}
