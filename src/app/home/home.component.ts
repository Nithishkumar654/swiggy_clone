import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from "../footer/footer.component";
import { FoodOptionsComponent } from "./food-options/food-options.component";
import { DineoutComponent } from "./dineout/dineout.component";
import { ApiService } from '../api.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NavigationBarComponent, FooterComponent, FoodOptionsComponent, DineoutComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    restaurants: any[] = [];

    constructor(private api: ApiService) { }
}
