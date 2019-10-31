import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { OWM5Days, OWM5DaysJsonResponse } from '../model/openweather.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OWMService {

  // api.openweathermap.org/data/2.5/forecast
  private owmUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private owmKey = '791cef67f17ed52abd373b0808d5b637';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<OWM5Days> {
    if (!city) {
      return undefined;
    }
    const options = { params: new HttpParams().set('q', city).set('appid', this.owmKey) };

    return this.http.get<OWM5DaysJsonResponse>(this.owmUrl, options).pipe(
      map(res => new OWM5Days(res)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
