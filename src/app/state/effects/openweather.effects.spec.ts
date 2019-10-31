import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { OpenweatherEffects } from './openweather.effects';

describe('OpenweatherEffects', () => {
  let actions$: Observable<any>;
  let effects: OpenweatherEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OpenweatherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<OpenweatherEffects>(OpenweatherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
