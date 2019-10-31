import { Customer } from './customer.model';

export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: any;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface SysInfo {
    type: number;
    id: number;
    message: any;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface OWMCurrentJsonResponse {
    coord: Coord;
    weather: Array<Weather>;
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: SysInfo;
    timezone: number; // shift in seconds from UTC
    id: number; // City id
    name: string; // city name
    cod: number;
}

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    timezone: number;
}


export interface WeatherList {
    dt: number; // time of daa forecasted, unix, UTC;
    main: Main;
    weather: Array<Weather>;
    clouds: Clouds;
    wind: Wind;
    rain: any; // Rain volume for last 3 hours, mm
    snow: any;
    dt_txt: Date; // date time of calculation, UTC
}

export interface OWM5DaysJsonResponse {
    cod: any;
    message: any;
    city: City;
    cnt: number; // number of lines returned
    list: Array<WeatherList>;
}

export class CustomerWeather {
    hasRain: boolean;
    constructor(public customer: Customer, public wheather: OWM5Days) {
        this.hasRain = wheather.hasRain();
    }
}

export class OWM5Days {

    constructor(public forecastResponse: OWM5DaysJsonResponse) {}

    hasRain(): boolean {
       const hasRainWeather = this.forecastResponse.list.find( l => {
           const w = l.weather.find( weather => {
              const main = weather.main && weather.main.toLowerCase();
              const hasRain = main ? main.indexOf('rain') > 0 : false;
              return hasRain;
           });
           return !!w;
       });
       return !!hasRainWeather;
    }
}
