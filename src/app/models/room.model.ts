import { Hotel } from "./hotel.model";

export class Room {
    id:number;
    number:string;
    hotel:Hotel;

    constructor(id:number, number:string, hotel:Hotel) {
        this.id=id;
        this.number=number;
        this.hotel=hotel;
    }
}