import { Action } from '@ngrx/store';
import { OWM5Days } from 'src/app/model/openweather.model';

export enum OpenweatherActionTypes {
  LoadOpenweathers = '[Openweather] Load Openweathers',
  LoadOpenweathersSuccess = '[Openweather] Load Openweathers Success',
  LoadOpenweathersFailure = '[Openweather] Load Openweathers Failure',
}

export class LoadOpenweathers implements Action {
  readonly type = OpenweatherActionTypes.LoadOpenweathers;
  constructor(public payload: {city: string}) {}
}

export class LoadOpenweathersSuccess implements Action {
  readonly type = OpenweatherActionTypes.LoadOpenweathersSuccess;
  constructor(public payload: { weather: OWM5Days }) { }
}

export class LoadOpenweathersFailure implements Action {
  readonly type = OpenweatherActionTypes.LoadOpenweathersFailure;
  constructor(public payload: { error: any }) { }
}

export type OpenweatherActions = LoadOpenweathers | LoadOpenweathersSuccess | LoadOpenweathersFailure;

