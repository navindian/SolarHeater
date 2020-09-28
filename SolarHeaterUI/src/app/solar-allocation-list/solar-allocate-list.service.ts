import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolarAllocateListService {

  constructor(private http:HttpClient) { }

  getAllocation() :Observable<number[]> {
    return this.http.get<number[]>("./assets/data.json");
  }
}
