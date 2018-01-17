import {Component, Inject, OnInit} from '@angular/core';
import {CustomerLocalStorageService} from '../customer-local-storage/customer-local-storage.service';
import {Customer} from '../customer/Customer';
import {CustomerStorageService} from '../customer-storage-service';
import {CustomerRESTStorageService} from '../customer-rest-storage/customer-rest-storage.service';

@Component({
  selector: 'weasley-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  private customerList: Customer[] = [];

  constructor(@Inject(CustomerRESTStorageService) private customerStorageService: CustomerStorageService) { }

  ngOnInit() {
    console.log(this.customerStorageService);
    this.customerStorageService.findAll().subscribe((result) => {
      this.customerList = result;
    });
  }

}
