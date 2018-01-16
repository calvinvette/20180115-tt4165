import {Component, Input, OnInit} from '@angular/core';
import {Customer} from './Customer';

@Component({
  selector: 'weasley-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private static customers: any = {
    '1234': new Customer(1234, 'Harry', 'Potter', 'harry.potter@hogwarts.ac.uk', '+44 0206 591-3155'),
    '1235': new Customer(1235, 'Ron', 'Weasley', 'ron.weasley@hogwarts.ac.uk', '+44 0206 591-3155'),
    '1236': new Customer(1236, 'Hermione', 'Granger', 'hermione.granger@hogwarts.ac.uk', '+44 0206 591-3155')
  };

  private static _customerList: Customer[] = [
    new Customer(1234, 'Harry', 'Potter', 'harry.potter@hogwarts.ac.uk', '+44 0206 591-3155'),
    new Customer(1235, 'Ron', 'Weasley', 'ron.weasley@hogwarts.ac.uk', '+44 0206 591-3155'),
    new Customer(1236, 'Hermione', 'Granger', 'hermione.granger@hogwarts.ac.uk', '+44 0206 591-3155')
  ];

  private _customerId: number = -1;
  private _customer: Customer = null;

  constructor() {

  }

  ngOnInit() {
    this.customer = CustomerComponent.customers[this.customerId];
    this.customer.birthDate = new Date(1979, 8, 17);
    // this.customer.birthDate = new Date(1980, 6, 31);
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get customerId(): number {
    return this._customerId;
  }

  @Input()
  set customerId(value: number) {
    this._customerId = value;
  }


  static get customerList(): Customer[] {
    return CustomerComponent._customerList;
  }

  static set customerList(value: Customer[]) {
    CustomerComponent._customerList = value;
  }
}
