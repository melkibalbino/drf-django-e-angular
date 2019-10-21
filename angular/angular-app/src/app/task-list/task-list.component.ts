import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Array<Task>>;
  task_form: FormGroup;

  constructor(private apiService: ApiService, private form_builder: FormBuilder) { }

  ngOnInit() {
    this.getTasks();
    this.task_form = this.form_builder.group({
      title: '',
      content: ''
    });

    this.task_form.controls["title"].setValidators([Validators.required])
    this.task_form.controls["content"].setValidators([Validators.required])
  }

  public getTasks() {
    this.tasks$ = this.apiService.getTasks();
  }

  onSubmit() {
    this.apiService.postTasks(this.task_form.value).subscribe((response) => {
      console.log(response);
      this.getTasks();
    })
  }

  deleteTask(task_id: number) {
    this.apiService.deleteTask(task_id).subscribe((response) => {
      console.log(response);
      this.getTasks();
    })
  }

}
