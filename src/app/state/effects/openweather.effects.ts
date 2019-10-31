import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { OWMService } from '../owm.service';
import { OpenweatherActionTypes, LoadOpenweathersFailure, LoadOpenweathers } from '../actions/openweather.actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';



@Injectable()
export class OpenweatherEffects {

  weather$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(OpenweatherActionTypes.LoadOpenweathers),
        mergeMap( ( action: LoadOpenweathers) => this.owmService.getWeather(action.payload.city).pipe(
          map( weather => ({type: OpenweatherActionTypes.LoadOpenweathersSuccess, payload: { weather}})),
          catchError( error => EMPTY )
        )
       )
      );
    }
  );

  constructor(private actions$: Actions, private owmService: OWMService) {}

}
