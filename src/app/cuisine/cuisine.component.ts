import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CurrencyPipe, NgFor, TitleCasePipe } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-cuisine',
    standalone: true,
    imports: [NgFor, CurrencyPipe, TitleCasePipe, NavbarComponent],
    templateUrl: './cuisine.component.html',
    styleUrl: './cuisine.component.scss'
})

export class CuisineComponent implements OnInit {
    route: ActivatedRoute = inject(ActivatedRoute);
    restaurant: string = "";
    details: any;
    items: any[] = [];
    constructor(private api: ApiService) {
        this.restaurant = this.route.snapshot.params['id'];
        console.log(this.restaurant);
    }

    ngOnInit(): void {
        this.details = this.api.getItems(this.restaurant)[0];
        console.log(this.details);
        this.items = this.details.items;
        console.log(this.items);
    }

    addToCart(item: any): void {
        console.log(JSON.stringify(item));
        let val = localStorage.getItem('cart');

        if (val == null) {
            item.count = 1;
            localStorage.setItem('cart', JSON.stringify([item]));
        } else {
            let cart = JSON.parse(val);

            let found = false;

            for (let i of cart) {
                if (i.name === item.name && i.price === item.price) {
                    i.count++;
                    found = true;
                    break;
                }
            }

            if (!found) {
                item.count = 1;
                cart.push(item);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

}
