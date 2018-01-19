import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CustomerRegisteredEvent} from '../customer/CustomerRegisteredEvent';
import {CustomerTableComponent} from '../customer-table/customer-table.component';

@Component({
  selector: 'weasley-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  @Output()
  private customerEmitter: EventEmitter<CustomerRegisteredEvent> = new EventEmitter<CustomerRegisteredEvent>();

  @ViewChild(CustomerTableComponent)
  private customerTable: CustomerTableComponent;

  constructor() { }

  ngOnInit() {
  }

  handleCustomerRegistered(evt: CustomerRegisteredEvent) {
    console.log("A customer was registered...");
    console.log(evt);
    console.log(evt.customer);
    this.customerTable.customerAdded(evt.customer);
  }

}
