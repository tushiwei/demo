import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomer from './reducers/customer.reducer';

// tslint:disable-next-line: no-empty-interface
export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const selectCustomerState = createFeatureSelector<fromCustomer.State>(fromCustomer.customersFeatureKey);

export const selectCustomerById = (customerId: number) => createSelector(
  selectCustomerState,
  customerState => customerState.entities[customerId]
);

export const selectAllCustomers = createSelector(
  selectCustomerState,
  fromCustomer.selectAll
);
