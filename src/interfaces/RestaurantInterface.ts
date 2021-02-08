import {
    AddressInterface,
    GradeInterface,
} from './index';

export interface RestaurantInterface {
    address: AddressInterface,
    borough: string,
    cuisine: string,
    grades: Array<GradeInterface>
    name: string,
    restaurant_id: string,
}