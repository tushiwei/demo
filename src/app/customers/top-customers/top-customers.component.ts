import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BartChartData, Customer } from 'src/app/model/customer.model';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectCustomerWeather, selectAllCustomers } from 'src/app/state';
import * as fromCustomer from '../../state/actions/customer.actions';
import * as fromOwm from '../../state/actions/openweather.actions';
import { tap } from 'rxjs/operators';
import { CustomerWeather } from 'src/app/model/openweather.model';

@Component({
  selector: 'app-top-customers',
  templateUrl: './top-customers.component.html',
  styleUrls: ['./top-customers.component.scss']
})
export class TopCustomersComponent implements OnInit, OnDestroy {

  customers$: Observable<Array<Customer>>;
  customers: Array<Customer>;
  customerWeather$: Observable<CustomerWeather>;
  results: Array<BartChartData>;
  subscriptions: Array<Subscription> = [];
  colorScheme: { domain: Array<string>} = {domain: []};
  colors = [];
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
      customers.sort( (a, b) => b.employees - a.employees );
      const top4 = customers.slice(0, 4);
      this.results = top4.map( c => {
        return {name: c.name, value: c.employees};
      });
    }));
    this.subscriptions.push(this.customerWeather$.subscribe( cw => {
       if ( this.results && this.results.length > 0 && cw) {
         const index = this.results.findIndex( data => data.name === cw.customer.name);
         if ( index >= 0 ) {
           this.colors[index] = cw.wheather.hasRain() ? 'red' : 'green';
         }
         this.colorScheme = {domain: this.colors};
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
