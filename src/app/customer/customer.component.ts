import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {Customer} from './Customer';
import {FormBuilder} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'weasley-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, AfterViewInit {
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

  private _state: string = "view";
  private _customerId: number = -1;
  private _customer: Customer = null;

  static ngbToDate(dateIn: any) {
    if ((dateIn instanceof Date) || ((typeof dateIn === "object") && (dateIn.getUTCDate))) {
      return new Date(dateIn.getYear(), dateIn.getMonth() - 1, dateIn.getDay());
    } else   // Assume a yyyy-mm-dd format
    if ((dateIn instanceof String) || (typeof dateIn === "string")) {
      const inStr = dateIn.toString();
      const year = inStr.substring(0, 4);
      const month = inStr.substring(5, 7);
      const day = inStr.substring(8, 10);

      return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
    } else if ((typeof dateIn === "object") && (dateIn.month)) {
      return new Date(dateIn.year, dateIn.month - 1, dateIn.day);
    }
  }

  static get customerList(): Customer[] {
    return CustomerComponent._customerList;
  }

  static set customerList(value: Customer[]) {
    CustomerComponent._customerList = value;
  }

  constructor() {
    // console.log("CTOR");
  }

  ngOnInit() {
    // console.log("On Init");
    this.customer = CustomerComponent.customers[this.customerId];
    this.customer.birthDate = new Date(1979, 8, 17);
    // this.customer.birthDate = new Date(1980, 6, 31);
  }

  ngAfterViewInit() {
    // console.log("After View Init");
    // $.getJSON("http://nextgeneducation.com/weasley/customers.json", res => {
    //   console.log(res);
    // });
  }

  onClick($event) {
    console.log(this.customer.firstName + " was clicked!");
  }

  onHover($event) {
    console.log(this.customer.firstName + " is being hovered over!");
  }

  ageInYears(): number {
    return Math.floor(this.customer.age);
  }

  update() {
    this._state = 'view';
  }

  bdChange(o, $event) {
    console.log("BD Change");
    console.log(o);
    debugger;
    this.customer.birthDate = CustomerComponent.ngbToDate($event);
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

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }


}
