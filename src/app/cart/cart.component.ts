import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CurrencyPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [NgFor, NgIf, CurrencyPipe, TitleCasePipe, NavbarComponent],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
    items: any[] = [];
    price: number = 0;

    constructor(private api: ApiService) { }
    ngOnInit(): void {
        const cartData = localStorage.getItem('cart');

        if (cartData) {
            this.items = JSON.parse(cartData);
        } else {
            this.items = [];
        }
        console.log(this.items);
        for (let item of this.items) {
            this.price += item.count * item.price;
        }
        console.log(this.price)
    }

    deleteItem(item: any): void {
        const index = this.items.findIndex(cartItem => cartItem.name === item.name && cartItem.price === item.price);

        if (index !== -1) {
            if (this.items[index].count > 1) {
                this.items[index].count--;
            } else {
                this.items.splice(index, 1);
            }
        }
        this.price -= item.price;
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
}

