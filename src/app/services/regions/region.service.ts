import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/tourism/api/v1/regions");
  }
}
