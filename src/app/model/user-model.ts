import { Address } from './address';

export class UserModel {
    name: string;
    age: number;
    street: string;
    number: number;
    state: string;
    adresses: Array<Address>;

    constructor() {
        this.adresses = new Array<Address>();
    }
}
