import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, of } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit {

    constructor(private api: ApiService, private router: Router) { }
    location: string = 'Hyderabad';

    ngOnInit(): void {
        this.api.location$.subscribe(loc => this.location = loc);
    }

    changeLocation(event: Event): void {
        const loc = (event.target as HTMLSelectElement).value;
        this.api.setLocation(loc);
    }

    goToCart(): void {
        this.router.navigate(['/cart']);
    }

}
