import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-dineout',
    standalone: true,
    imports: [NgFor, CardComponent],
    templateUrl: './dineout.component.html',
    styleUrl: './dineout.component.scss'
})
export class DineoutComponent {
    restaurants: string[] = ["ABs", "MasalaRepublicbyDadu's", "clove", "seasons", "pizzahut", "ABs-1"];
    getImage(restaurant: string): string {
        return `../../../assets/images/${restaurant}/wallpaper.png`;
    }
}
