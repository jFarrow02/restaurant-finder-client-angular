import { Component, OnInit } from '@angular/core';

import { RestaurantService } from './restaurant.service';
import { RestaurantInterface } from '../interfaces';
import { data } from '../data/restaurants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'RestaurantFinder';
  restaurantList: Array<Array<RestaurantInterface>> = [];
  private restaurantService: RestaurantService;

  constructor(){}

  ngOnInit(){
    this.restaurantService = new RestaurantService(data);
    this.restaurantList = this.restaurantService.fetchRestaurants();
  }
}
