import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { CustomerService } from '../customer.service';
import { CustomerActionTypes } from '../actions/customer.actions';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';



@Injectable()
export class CustomerEffects {

  customer$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CustomerActionTypes.RequestCustomers),
        mergeMap( () => this.customerService.getCustomers().pipe(
          map( customers => ( {type: CustomerActionTypes.LoadCustomers, payload: { customers}})),
          catchError( error => EMPTY)
        )
       )
      );
    }
  );

  constructor(private actions$: Actions, private customerService: CustomerService) {}

}
