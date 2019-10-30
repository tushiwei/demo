import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BartChartData, Customer } from 'src/app/model/customer.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectAllCustomers } from 'src/app/state';
import * as fromCustomer from '../../state/actions/customer.actions';

@Component({
  selector: 'app-top-customers',
  templateUrl: './top-customers.component.html',
  styleUrls: ['./top-customers.component.scss']
})
export class TopCustomersComponent implements OnInit, OnDestroy {

  customers$: Observable<Array<Customer>>;
  customers: Array<BartChartData>;
  subscriptions: Array<Subscription> = [];
  colorScheme: { domain: Array<string>};
  constructor(private store: Store<AppState>) {
    this.customers$ = this.store.select(selectAllCustomers);
    this.subscriptions.push(this.customers$.subscribe( customers => {
      customers.sort( (a, b) => b.employees - a.employees );
      const top4 = customers.slice(0, 4);
      const colors = [];
      this.customers = top4.map( c => {
        colors.push( c.hasRains ? 'red' : 'green');
        return {name: c.name, value: c.employees};
      });
      this.colorScheme = { domain: colors};
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
