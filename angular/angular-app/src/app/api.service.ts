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

  public postTasks(new_task: Task) {
    return this.http.post(this.API_URL + 'task/', new_task);
  }

  public putTask(the_task: Task) {
    return this.http.put(this.API_URL + 'task/' + the_task.id + '/', the_task);
  }

  public deleteTask(task_id: number) {
    return this.http.delete(this.API_URL + 'task/' + task_id + '/');
  }
}
