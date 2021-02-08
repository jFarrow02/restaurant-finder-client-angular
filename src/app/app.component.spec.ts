import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantService } from './restaurant.service';
import { RestaurantInterface } from '../interfaces';

let restaurantServiceSpy;
const MOCK_DATA: Array<RestaurantInterface> = [
  {
    "address": {
        "building": "1007",
        "coord": [-73.856077, 40.848447],
        "street": "Morris Park Ave",
        "zipcode": "10462"
    },
    "borough": "Bronx",
    "cuisine": "Bakery",
    "grades": [
        {"date": {"$date": 1393804800000}, "grade": "A", "score": 2},
        {"date": {"$date": 1378857600000}, "grade": "A", "score": 6},
        {"date": {"$date": 1358985600000}, "grade": "A", "score": 10},
        {"date": {"$date": 1322006400000}, "grade": "A", "score": 9},
        {"date": {"$date": 1299715200000}, "grade": "B", "score": 14}
    ],
    "name": "Morris Park Bake Shop",
    "restaurant_id": "30075445"
  },
  {
      "address": {
          "building": "469",
          "coord": [-73.961704, 40.662942],
          "street": "Flatbush Avenue",
          "zipcode": "11225"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
          {"date": {"$date": 1419897600000}, "grade": "A", "score": 8},
          {"date": {"$date": 1404172800000}, "grade": "B", "score": 23},
          {"date": {"$date": 1367280000000}, "grade": "A", "score": 12},
          {"date": {"$date": 1336435200000}, "grade": "A", "score": 12}
      ],
      "name": "Wendy'S",
      "restaurant_id": "30112340"
  }
];

class MockRestaurantService {
  fetchRestaurants(){ return MOCK_DATA;}
  // fetchRestaurants = restaurantServiceSpy.fetchRestaurants;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    restaurantServiceSpy = jasmine.createSpyObj('RestaurantService', ['fetchRestaurants']);
    restaurantServiceSpy.fetchRestaurants.and.returnValue(MOCK_DATA);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        RestaurantListComponent,
      ],
      providers: [
        // AppComponent,
        { provide: RestaurantService, useClass: MockRestaurantService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RestaurantFinder'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('RestaurantFinder');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-component-title').textContent).toContain('RestaurantFinder');
  });

  it('should fetch restaurants', () => {

  });
});
