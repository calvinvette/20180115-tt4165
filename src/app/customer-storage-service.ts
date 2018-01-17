import {Observable} from 'rxjs/Observable';

import {Customer} from './customer/Customer';

export interface CustomerStorageService {
  insert(customer: Customer): Observable<Customer>;

  remove(customer: Customer): Observable<Customer>;

  update(customer: Customer): Observable<Customer>;

  findById(customerId: number): Observable<Customer>;

  findAll(): Observable<Customer[]>;
}
