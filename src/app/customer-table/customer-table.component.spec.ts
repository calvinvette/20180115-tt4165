import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTableComponent } from './customer-table.component';
import {CustomerRESTStorageService} from '../customer-rest-storage/customer-rest-storage.service';
import {HttpClientModule} from '@angular/common/http';

describe('CustomerTableComponent', () => {
  let component: CustomerTableComponent;
  let fixture: ComponentFixture<CustomerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CustomerTableComponent ],
      providers: [CustomerRESTStorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
