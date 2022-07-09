import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICities } from 'src/app/Interfaces/Cities';
import { Shopping } from 'src/app/state/reducers';
import { CITIES_URL } from '../environment';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {

  constructor(private http: HttpClient) {}

  fetchCitiesApi(): Observable<ICities[]> {
    return this.http.get<ICities[]>(CITIES_URL);
  }
}
