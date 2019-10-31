import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomer from './reducers/customer.reducer';
import * as fromOpenweather from './reducers/openweather.reducer';
import { CustomerWeather } from '../model/openweather.model';

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

export const selectOwmState = createFeatureSelector<fromOpenweather.State>(fromOpenweather.openweatherFeatureKey);

export const selectWeather = createSelector(selectOwmState, fromOpenweather.getWeather);
export const selectWeatherLoaded = createSelector(selectOwmState, fromOpenweather.getLoaded);

export const selectCustomerWeather = createSelector(selectAllCustomers, selectWeather,
  (customers, weather) => {
    if ( customers && weather ) {
       const customer = customers.find( c => c.location === weather.forecastResponse.city.name);
       return new CustomerWeather(customer, weather);
    }
    return undefined;
  }
);
