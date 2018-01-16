import {Component, OnInit} from '@angular/core';
import {Customer} from './Customer';

@Component({
  selector: 'weasley-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private _customer: Customer = null;

  constructor() {
    this.customer = new Customer(1234, 'Harry', 'Potter', 'harry.potter@hogwarts.ac.uk', '+44 0206 591-3155');
    this.customer.birthDate = new Date(1980, 6, 31);
  }

  ngOnInit() {
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }
}
