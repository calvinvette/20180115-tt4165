import { Component } from '@angular/core';
import {Customer} from './customer/Customer';
import {CustomerComponent} from './customer/customer.component';

@Component({
  selector: 'weasley-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title = 'Weasley\'s Wizarding Wheezes';
  private _now: Date = new Date();
  private _customerList: Customer[] = CustomerComponent.customerList;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get now(): Date {
    return this._now;
  }

  set now(value: Date) {
    this._now = value;
  }

  get customerList(): Customer[] {
    return this._customerList;
  }

  set customerList(value: Customer[]) {
    this._customerList = value;
  }
}
