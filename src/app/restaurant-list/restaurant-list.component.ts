import { Component, Input } from '@angular/core';

import { RestaurantInterface } from '../../interfaces';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.sass']
})
export class RestaurantListComponent {

  @Input()
  restaurantList: Array<Array<RestaurantInterface>> = [];

  constructor() {}

}
