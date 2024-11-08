import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    restaurants: any[] = [
        {
            "location": "Hyderabad",
            "restaurants": [
                {
                    "restaurantName": "Biryani House",
                    "location": "Banjara Hills",
                    "rating": 4.5,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Hyderabadi Biryani",
                            "price": 250,
                            "type": "nonveg",
                            "description": "Aromatic rice cooked with tender chicken, mutton, and spices"
                        },
                        {
                            "name": "Shawarma",
                            "price": 120,
                            "type": "nonveg",
                            "description": "Thinly sliced grilled meat wrapped in pita bread"
                        },
                        {
                            "name": "Burger",
                            "price": 150,
                            "type": "nonveg",
                            "description": "Juicy chicken patty with lettuce, tomatoes, and mayo"
                        },
                        {
                            "name": "Icecream",
                            "price": 60,
                            "type": "dessert",
                            "description": "Cold and creamy ice cream available in various flavors"
                        }
                    ]
                },
                {
                    "restaurantName": "Pizza & Pasta Corner",
                    "location": "Jubilee Hills",
                    "rating": 4.7,
                    "timeToDeliver": "35 mins",
                    "items": [
                        {
                            "name": "Veg Pizza",
                            "price": 250,
                            "type": "veg",
                            "description": "Thin crust pizza topped with fresh vegetables and cheese"
                        },
                        {
                            "name": "Pasta",
                            "price": 180,
                            "type": "veg",
                            "description": "Creamy pasta with mushrooms, cheese, and herbs"
                        },
                        {
                            "name": "Icecream",
                            "price": 60,
                            "type": "dessert",
                            "description": "Cold and creamy ice cream available in various flavors"
                        }
                    ]
                },
                {
                    "restaurantName": "The Shawarma Joint",
                    "location": "HiTech City",
                    "rating": 4.6,
                    "timeToDeliver": "40 mins",
                    "items": [
                        {
                            "name": "Shawarma",
                            "price": 150,
                            "type": "nonveg",
                            "description": "Grilled chicken with a blend of spices served in a wrap"
                        },
                        {
                            "name": "Burger",
                            "price": 160,
                            "type": "nonveg",
                            "description": "Beef patty, cheese, lettuce, and a special sauce"
                        },
                        {
                            "name": "Rolls",
                            "price": 120,
                            "type": "nonveg",
                            "description": "Grilled meat wrapped in a paratha, served with chutney"
                        }
                    ]
                },
                {
                    "restaurantName": "South Indian Delights",
                    "location": "Gachibowli",
                    "rating": 4.3,
                    "timeToDeliver": "25 mins",
                    "items": [
                        {
                            "name": "Dosa",
                            "price": 70,
                            "type": "veg",
                            "description": "Crispy thin pancake made from rice and urad dal, served with chutney and sambar"
                        },
                        {
                            "name": "Idli",
                            "price": 50,
                            "type": "veg",
                            "description": "Steamed rice cakes served with coconut chutney and sambar"
                        },
                        {
                            "name": "Khichdi",
                            "price": 120,
                            "type": "veg",
                            "description": "Rice and lentils cooked together with mild spices"
                        }
                    ]
                },
                {
                    "restaurantName": "The Pasta Lounge",
                    "location": "Secunderabad",
                    "rating": 4.2,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Pasta",
                            "price": 180,
                            "type": "veg",
                            "description": "Pasta in a creamy sauce with herbs and vegetables"
                        },
                        {
                            "name": "Pizza",
                            "price": 250,
                            "type": "veg",
                            "description": "Classic pizza topped with mozzarella and fresh veggies"
                        },
                        {
                            "name": "Pastry",
                            "price": 80,
                            "type": "dessert",
                            "description": "Delicious layered pastry filled with cream"
                        }
                    ]
                },
                {
                    "restaurantName": "Roll Up",
                    "location": "Madhapur",
                    "rating": 4,
                    "timeToDeliver": "20 mins",
                    "items": [
                        {
                            "name": "Rolls",
                            "price": 130,
                            "type": "nonveg",
                            "description": "Meat or vegetables wrapped in a soft flatbread"
                        },
                        {
                            "name": "Burger",
                            "price": 150,
                            "type": "nonveg",
                            "description": "A classic chicken burger with fresh veggies and cheese"
                        }
                    ]
                },
                {
                    "restaurantName": "Ice Cream Factory",
                    "location": "Banjara Hills",
                    "rating": 4.8,
                    "timeToDeliver": "25 mins",
                    "items": [
                        {
                            "name": "Icecream",
                            "price": 60,
                            "type": "dessert",
                            "description": "Variety of ice cream flavors in cones and cups"
                        },
                        {
                            "name": "Pastry",
                            "price": 90,
                            "type": "dessert",
                            "description": "Rich chocolate pastry with whipped cream"
                        }
                    ]
                },
                {
                    "restaurantName": "The Biryani Palace",
                    "location": "Kondapur",
                    "rating": 4.6,
                    "timeToDeliver": "35 mins",
                    "items": [
                        {
                            "name": "Hyderabadi Biryani",
                            "price": 280,
                            "type": "nonveg",
                            "description": "Traditional Hyderabadi biryani with mutton or chicken"
                        },
                        {
                            "name": "Shawarma",
                            "price": 130,
                            "type": "nonveg",
                            "description": "Juicy chicken wrapped in a flatbread"
                        }
                    ]
                },
                {
                    "restaurantName": "Buns & Bites",
                    "location": "Ameerpet",
                    "rating": 4.4,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Burger",
                            "price": 170,
                            "type": "nonveg",
                            "description": "A beef patty with fresh toppings and sauce"
                        },
                        {
                            "name": "Rolls",
                            "price": 150,
                            "type": "nonveg",
                            "description": "Grilled chicken wrapped in paratha with sauces"
                        },
                        {
                            "name": "Icecream",
                            "price": 70,
                            "type": "dessert",
                            "description": "Sweet, cold ice cream with various flavor choices"
                        }
                    ]
                }
            ]
        },
        {
            "location": "Bangalore",
            "restaurants": [
                {
                    "restaurantName": "Biryani Express",
                    "location": "Koramangala",
                    "rating": 4.6,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Hyderabadi Biryani",
                            "price": 280,
                            "type": "nonveg",
                            "description": "Fluffy rice and tender chicken, cooked with authentic spices"
                        },
                        {
                            "name": "Shawarma",
                            "price": 140,
                            "type": "nonveg",
                            "description": "Juicy chicken wrapped in soft pita bread with garlic sauce"
                        },
                        {
                            "name": "Icecream",
                            "price": 80,
                            "type": "dessert",
                            "description": "Creamy, rich ice cream available in various flavors"
                        }
                    ]
                },
                {
                    "restaurantName": "Pizza Planet",
                    "location": "Indiranagar",
                    "rating": 4.5,
                    "timeToDeliver": "35 mins",
                    "items": [
                        {
                            "name": "Veg Pizza",
                            "price": 220,
                            "type": "veg",
                            "description": "Fresh vegetables topped on a cheesy thin crust"
                        },
                        {
                            "name": "Pasta",
                            "price": 180,
                            "type": "veg",
                            "description": "Creamy pasta with mushrooms and aromatic herbs"
                        },
                        {
                            "name": "Pastry",
                            "price": 90,
                            "type": "dessert",
                            "description": "Delicious layered pastry with creamy fillings"
                        }
                    ]
                },
                {
                    "restaurantName": "Shawarma Street",
                    "location": "Whitefield",
                    "rating": 4.4,
                    "timeToDeliver": "25 mins",
                    "items": [
                        {
                            "name": "Shawarma",
                            "price": 150,
                            "type": "nonveg",
                            "description": "Succulent chicken with a blend of spices served in a wrap"
                        },
                        {
                            "name": "Rolls",
                            "price": 120,
                            "type": "nonveg",
                            "description": "Grilled chicken rolled in a soft paratha"
                        }
                    ]
                },
                {
                    "restaurantName": "South Indian Tiffins",
                    "location": "Jayanagar",
                    "rating": 4.3,
                    "timeToDeliver": "20 mins",
                    "items": [
                        {
                            "name": "Dosa",
                            "price": 70,
                            "type": "veg",
                            "description": "Crispy rice pancake served with chutney and sambar"
                        },
                        {
                            "name": "Idli",
                            "price": 50,
                            "type": "veg",
                            "description": "Steamed rice cakes served with chutney and sambar"
                        },
                        {
                            "name": "Khichdi",
                            "price": 130,
                            "type": "veg",
                            "description": "Rice and lentils cooked with mild spices"
                        }
                    ]
                },
                {
                    "restaurantName": "The Burger Joint",
                    "location": "MG Road",
                    "rating": 4.7,
                    "timeToDeliver": "25 mins",
                    "items": [
                        {
                            "name": "Burger",
                            "price": 170,
                            "type": "nonveg",
                            "description": "Grilled chicken patty with fresh veggies and special sauce"
                        },
                        {
                            "name": "Rolls",
                            "price": 140,
                            "type": "nonveg",
                            "description": "Tasty chicken rolls wrapped in a soft flatbread"
                        }
                    ]
                },
                {
                    "restaurantName": "Pasta Station",
                    "location": "Bellandur",
                    "rating": 4.6,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Pasta",
                            "price": 200,
                            "type": "veg",
                            "description": "Italian pasta served in a creamy sauce with vegetables"
                        },
                        {
                            "name": "Pizza",
                            "price": 250,
                            "type": "veg",
                            "description": "Cheesy pizza topped with tomatoes, olives, and fresh herbs"
                        }
                    ]
                },
                {
                    "restaurantName": "Ice Cream Parlour",
                    "location": "Rajajinagar",
                    "rating": 4.8,
                    "timeToDeliver": "20 mins",
                    "items": [
                        {
                            "name": "Icecream",
                            "price": 60,
                            "type": "dessert",
                            "description": "Cold, creamy ice cream in a variety of classic flavors"
                        },
                        {
                            "name": "Pastry",
                            "price": 100,
                            "type": "dessert",
                            "description": "Rich and creamy chocolate pastry with layers of cake"
                        }
                    ]
                },
                {
                    "restaurantName": "The Roll Shop",
                    "location": "Koramangala",
                    "rating": 4.5,
                    "timeToDeliver": "25 mins",
                    "items": [
                        {
                            "name": "Rolls",
                            "price": 130,
                            "type": "nonveg",
                            "description": "Tender chicken wrapped in a paratha, served with chutney"
                        },
                        {
                            "name": "Burger",
                            "price": 160,
                            "type": "nonveg",
                            "description": "Chicken patty with crispy lettuce and mayo"
                        }
                    ]
                },
                {
                    "restaurantName": "Parotta Haven",
                    "location": "Sarjapur Road",
                    "rating": 4.2,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Parotta",
                            "price": 40,
                            "type": "veg",
                            "description": "Soft, flaky parotta served with curry"
                        },
                        {
                            "name": "Dosa",
                            "price": 80,
                            "type": "veg",
                            "description": "Crispy dosa with coconut chutney and sambar"
                        }
                    ]
                },
                {
                    "restaurantName": "Biryani Junction",
                    "location": "Bannerghatta Road",
                    "rating": 4.4,
                    "timeToDeliver": "35 mins",
                    "items": [
                        {
                            "name": "Chicken Biryani",
                            "price": 250,
                            "type": "nonveg",
                            "description": "Basmati rice and spicy chicken cooked in a clay pot"
                        },
                        {
                            "name": "Shawarma",
                            "price": 120,
                            "type": "nonveg",
                            "description": "Tender chicken grilled with spices and served in a wrap"
                        }
                    ]
                }
            ]
        },
        {
            "location": "Chennai",
            "restaurants": [
                {
                    "restaurantName": "Biryani House",
                    "location": "Nungambakkam",
                    "rating": 4.5,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Hyderabadi Biryani",
                            "price": 270,
                            "type": "nonveg",
                            "description": "Fragrant rice with tender chicken cooked with spices"
                        },
                        {
                            "name": "Shawarma",
                            "price": 150,
                            "type": "nonveg",
                            "description": "Grilled chicken wrapped in a soft flatbread with sauces"
                        },
                        {
                            "name": "Icecream",
                            "price": 90,
                            "type": "dessert",
                            "description": "Creamy ice cream available in various flavors"
                        }
                    ]
                },
                {
                    "restaurantName": "The Pizza Spot",
                    "location": "T Nagar",
                    "rating": 4.6,
                    "timeToDeliver": "25 mins",
                    "items": [
                        {
                            "name": "Veg Pizza",
                            "price": 220,
                            "type": "veg",
                            "description": "Cheese, veggies, and tomato sauce on a crispy thin crust"
                        },
                        {
                            "name": "Pasta",
                            "price": 190,
                            "type": "veg",
                            "description": "Pasta with a creamy garlic sauce and fresh herbs"
                        },
                        {
                            "name": "Pastry",
                            "price": 100,
                            "type": "dessert",
                            "description": "Delicious chocolate pastry with layers of soft cake"
                        }
                    ]
                },
                {
                    "restaurantName": "Shawarma King",
                    "location": "Adyar",
                    "rating": 4.4,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Chicken Shawarma",
                            "price": 180,
                            "type": "nonveg",
                            "description": "Juicy chicken grilled with spices and wrapped in pita"
                        },
                        {
                            "name": "Rolls",
                            "price": 140,
                            "type": "nonveg",
                            "description": "Grilled chicken wrapped in a soft paratha"
                        }
                    ]
                },
                {
                    "restaurantName": "South Indian Delights",
                    "location": "Mylapore",
                    "rating": 4.3,
                    "timeToDeliver": "25 mins",
                    "items": [
                        {
                            "name": "Dosa",
                            "price": 60,
                            "type": "veg",
                            "description": "Crispy and golden rice pancake served with chutney and sambar"
                        },
                        {
                            "name": "Idli",
                            "price": 50,
                            "type": "veg",
                            "description": "Steamed rice cakes served with chutney and sambar"
                        },
                        {
                            "name": "Khichdi",
                            "price": 130,
                            "type": "veg",
                            "description": "Rice and lentils cooked with spices for a comfort meal"
                        }
                    ]
                },
                {
                    "restaurantName": "Burger Mania",
                    "location": "Besant Nagar",
                    "rating": 4.7,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Veg Burger",
                            "price": 150,
                            "type": "veg",
                            "description": "A veggie patty with lettuce, tomato, and mayo"
                        },
                        {
                            "name": "Chicken Burger",
                            "price": 180,
                            "type": "nonveg",
                            "description": "Juicy chicken patty with fresh veggies and sauces"
                        }
                    ]
                },
                {
                    "restaurantName": "Pasta & Pizza Place",
                    "location": "Velachery",
                    "rating": 4.6,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Pasta",
                            "price": 200,
                            "type": "veg",
                            "description": "Creamy pasta with a blend of mushrooms and herbs"
                        },
                        {
                            "name": "Pizza",
                            "price": 250,
                            "type": "veg",
                            "description": "Cheese, veggies, and olives on a thin, crispy crust"
                        }
                    ]
                },
                {
                    "restaurantName": "Ice Cream Delight",
                    "location": "Nungambakkam",
                    "rating": 4.8,
                    "timeToDeliver": "20 mins",
                    "items": [
                        {
                            "name": "Chocolate Ice Cream",
                            "price": 70,
                            "type": "dessert",
                            "description": "Rich, velvety chocolate ice cream"
                        },
                        {
                            "name": "Pastry",
                            "price": 110,
                            "type": "dessert",
                            "description": "Soft layered chocolate pastry topped with ganache"
                        }
                    ]
                },
                {
                    "restaurantName": "The Roll Kitchen",
                    "location": "Anna Nagar",
                    "rating": 4.5,
                    "timeToDeliver": "25 mins",
                    "items": [
                        {
                            "name": "Chicken Roll",
                            "price": 140,
                            "type": "nonveg",
                            "description": "Spicy grilled chicken wrapped in paratha"
                        },
                        {
                            "name": "Veg Roll",
                            "price": 120,
                            "type": "veg",
                            "description": "Fresh veggies wrapped in a soft flatbread"
                        }
                    ]
                },
                {
                    "restaurantName": "Parotta Paradise",
                    "location": "Kilpauk",
                    "rating": 4.2,
                    "timeToDeliver": "30 mins",
                    "items": [
                        {
                            "name": "Parotta",
                            "price": 45,
                            "type": "veg",
                            "description": "Flaky and soft parotta served with curry"
                        },
                        {
                            "name": "Dosa",
                            "price": 80,
                            "type": "veg",
                            "description": "Golden and crispy dosa with chutney and sambar"
                        }
                    ]
                },
                {
                    "restaurantName": "Biryani & Beyond",
                    "location": "Choolaimedu",
                    "rating": 4.4,
                    "timeToDeliver": "35 mins",
                    "items": [
                        {
                            "name": "Chicken Biryani",
                            "price": 250,
                            "type": "nonveg",
                            "description": "Fragrant biryani with succulent chicken pieces"
                        },
                        {
                            "name": "Shawarma",
                            "price": 160,
                            "type": "nonveg",
                            "description": "Tender chicken wrapped in pita with sauces"
                        }
                    ]
                }
            ]
        }
    ]

    constructor(private http: HttpClient) { }

    private locationSubject = new BehaviorSubject<string>("Hyderabad");
    location$ = this.locationSubject.asObservable();

    setLocation(loc: string): void {
        this.locationSubject.next(loc);
    }

    getLocation(): string {
        return this.locationSubject.getValue();
    }

    private cartItems = new BehaviorSubject<any[]>([]);
    cartItems$ = this.cartItems.asObservable();

    addItem(item: any) {
        const cur = this.cartItems.getValue();
        this.cartItems.next([...cur, item]);
    }

    removeItem(item: any) {
        const updatedItems = this.cartItems.getValue().filter(i => i !== item);
        this.cartItems.next(updatedItems);
    }

    cart(): void {
        console.log(this.cartItems$);
    }

    getData(): any[] {
        return this.restaurants.filter(e => e.location == this.getLocation());
    }


    getItems(restaurant: string): any[] {
        let res = this.getData()[0].restaurants;
        let result = [];
        for (let r of res) {
            if (r.restaurantName.split(' ').join('-') == restaurant) {
                result.push(r);
            }
        }
        return result;
    }
}
