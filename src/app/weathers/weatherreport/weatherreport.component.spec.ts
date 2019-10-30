import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherreportComponent } from './weatherreport.component';

describe('WeatherreportComponent', () => {
  let component: WeatherreportComponent;
  let fixture: ComponentFixture<WeatherreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
