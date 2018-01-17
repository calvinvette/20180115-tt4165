import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { ShippingManagementComponent } from './shipping-management/shipping-management.component';
import { ShippingTableComponent } from './shipping-table/shipping-table.component';
import { ShippingViewComponent } from './shipping-view/shipping-view.component';
import { LandingComponent } from './landing/landing.component';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app.routing';
import {CustomerLocalStorageService} from './customer-local-storage/customer-local-storage.service';
import {CustomerRESTStorageService} from './customer-rest-storage/customer-rest-storage.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerManagementComponent,
    CustomerTableComponent,
    OrderManagementComponent,
    OrderTableComponent,
    OrderViewComponent,
    ShippingManagementComponent,
    ShippingTableComponent,
    ShippingViewComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRouting
  ],
  providers: [
    CustomerLocalStorageService,
    CustomerRESTStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
