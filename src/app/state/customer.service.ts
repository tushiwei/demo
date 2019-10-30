import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
     return this.http.get<Customer[]>(this.customerUrl);
  }

  getCustomer(id: string): Observable<Customer> {
    const pUrl = this.customerUrl + '/' + id;
    return this.http.get<Customer>(pUrl);
  }
}
