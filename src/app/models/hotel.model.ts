import { City } from "./city.model";

export class Hotel {

    id : number;
    name : string;
    address : string;
    phone : string;
    numberStars : number;
    numberRooms : number;
    lowestPrice : number;
    city : City;

    constructor(id:number,name:string,address:string,phone:string,numberStars:number, numberRooms:number, lowestPrice:number, city:City) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.numberStars = numberStars;
        this.numberRooms = numberRooms;
        this.lowestPrice = lowestPrice;
        this.city = city;
 
    }
}
