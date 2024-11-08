import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor } from '@angular/common';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-restaurants',
    standalone: true,
    imports: [NavbarComponent, NgFor, RouterLink],
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

    res!: Observable<any[]>;

    restaurants: any[] = []

    constructor(private api: ApiService, private router: Router) { }

    idx: number = 0;

    images: string[] = ["ABs", "clove", "MasalaRepublicbyDadu's", "ABs-1", "pizzahut", "seasons"];

    navigateTo(restaurant: string): void {
        console.log(restaurant);
        this.router.navigate(['/restaurant', restaurant.split(' ').join('-')])
    }

    ngOnInit(): void {
        this.restaurants = this.api.getData()[0].restaurants;
    }

    randomImage(): string {
        const res = this.images[this.idx];
        this.idx = (this.idx + 1) % 6;
        return res;
    }
}
