import {Customer} from './Customer';

export class CustomerRegisteredEvent /*extends Event*/ {
  constructor(private _customer: Customer, source: any = {}) {
    // super(source);
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }
}
