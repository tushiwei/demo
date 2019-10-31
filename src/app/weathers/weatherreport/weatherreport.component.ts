import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectCustomerWeather, selectAllCustomers } from 'src/app/state';
import * as fromCustomer from '../../state/actions/customer.actions';
import * as fromOwm from '../../state/actions/openweather.actions';
import { tap } from 'rxjs/operators';
import { CustomerWeather } from 'src/app/model/openweather.model';


@Component({
  selector: 'app-weatherreport',
  templateUrl: './weatherreport.component.html',
  styleUrls: ['./weatherreport.component.scss']
})
export class WeatherreportComponent implements OnInit, OnDestroy {

  customers: Array<Customer>;
  customers$: Observable<Array<Customer>>;
  customerWeather$: Observable<CustomerWeather>;
  subscriptions: Array<Subscription> = [];

  rainCustomers: Array<CustomerWeather> = [];

  constructor(private store: Store<AppState>) {
    this.customerWeather$ = this.store.pipe(select(selectCustomerWeather));
    this.customers$ = this.store.pipe(select(selectAllCustomers),
      tap( customers => {
        customers.forEach( c => {
            setTimeout( () => {
              this.store.dispatch( new fromOwm.LoadOpenweathers({city: c.location}));
             }, 100);
        });
      })
    );
    this.subscriptions.push(this.customers$.subscribe( customers => {
      this.customers = customers;
    }));
    this.subscriptions.push(this.customerWeather$.subscribe( cw => {
      if ( cw ) {
        this.rainCustomers.push(cw);
      }
    }));
  }

  ngOnInit() {
    this.store.dispatch(new fromCustomer.RequestCustomers());
  }

  ngOnDestroy(): void {
    if ( this.subscriptions.length > 0) {
      this.subscriptions.forEach( s => s.unsubscribe());
    }
  }

}
