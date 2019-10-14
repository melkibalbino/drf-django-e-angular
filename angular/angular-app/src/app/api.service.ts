import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://localhost/api/';

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.API_URL + 'task/');
  }
}
