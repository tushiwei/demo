import { Action } from '@ngrx/store';
import { OWMService } from '../owm.service';
import { OWM5Days } from 'src/app/model/openweather.model';
import { OpenweatherActions, OpenweatherActionTypes } from '../actions/openweather.actions';

export const openweatherFeatureKey = 'openweather';

export interface State {
   loaded: boolean;
   weather: OWM5Days;
   error: any;
}

export const initialState: State = {
   loaded: false,
   weather: undefined,
   error: undefined
};

export function reducer(state = initialState, action: OpenweatherActions): State {
  switch (action.type) {
    case OpenweatherActionTypes.LoadOpenweathers:
      return { ...state, loaded: false, weather: undefined, error: undefined};
    case OpenweatherActionTypes.LoadOpenweathersSuccess:
      return { ...state, loaded: true, weather: action.payload.weather, error: undefined};
    case OpenweatherActionTypes.LoadOpenweathersFailure:
      return { ...state, loaded: false, weather: undefined, error: action.payload.error};
    default:
      return state;
  }
}

export const getWeather = (state: State) => state.weather;
export const getLoaded = ( state: State) => state.loaded;
