import { User } from "./user.model";

export class Book {
    id:number;
    dateStart:Date;
    dateEnd:Date;
    user:User;
    amount:number;

    constructor(id:number,
        dateStart:Date,
        dateEnd:Date,
        user:User,
        amount:number) {
            this.id=id;
            this.dateStart=dateStart;
            this.dateEnd=dateEnd;
            this.user=user;
            this.amount=amount;
        }
}