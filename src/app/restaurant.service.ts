import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RestaurantInterface } from '../interfaces';
import { data } from '../data/restaurants';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor() {}

  fetchRestaurants(): Observable<Map<string, [RestaurantInterface]>>{
    const data = new Map<string, [RestaurantInterface]>();

    return of(data);
  }

  buildRestaurantsMap(): Map<string, [RestaurantInterface]>{
    const restaurantsMap = new Map<string, [RestaurantInterface]>();

    // transform...
    return restaurantsMap;
  }
  // fetchRestaurants(): Array<Array<RestaurantInterface>> {
  //   const restaurants = this.data.sort((a: { name: string }, b: { name: string }): number => {
  //     if(a.name < b.name){ return -1}
  //     else if( a.name > b.name){ return 1 }
  //     else{ return 0}
  //   });
      
  //   const slotted = [ [] ];
  //   let slot = 0;
  //   const entriesPerSlot = 10;
    
  //   restaurants.forEach(( d, index ) => {
  //       if(index!== 0 && index % entriesPerSlot === 0){
  //           slotted.push([d]);
  //           slot+= 1;
  //       } else if(index === 0){
  //           slotted[0].push(d);
  //       }
  //       else {
  //           slotted[slot].push(d);
  //       }
  //   });

  //   return slotted;
  // }
}
