export class User {

    id : number;
    name:string;
    firstName:string;
    phone:string;
    address:string;
    email:string;

    constructor( id : number,
        name:string,
        firstName:string,
        phone:string,
        address:string,
        email:string) {

            this.id=id;
            this.name=name;
            this.firstName=firstName;
            this.phone=phone;
            this.address=address;
            this.email=email;

    }
}