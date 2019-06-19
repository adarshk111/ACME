import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl : string = environment.baseAPIUrl
  constructor(private http: HttpClient) { }

  getCountries() : Observable<Country[]>{
    return this.http.get<Country[]>(this.baseUrl + "/api/countries")
  }
}
