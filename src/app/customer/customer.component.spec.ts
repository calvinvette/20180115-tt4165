import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {CustomerRESTStorageService} from '../customer-rest-storage/customer-rest-storage.service';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule
      ],
      declarations: [ CustomerComponent ],
      providers: [CustomerRESTStorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
