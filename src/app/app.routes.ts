import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "restaurants",
        component: RestaurantsComponent
    },
    {
        path: "restaurant/:id",
        component: CuisineComponent
    },
    {
        path: "cart",
        component: CartComponent
    }
];
