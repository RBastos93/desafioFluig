import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgForm, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  @Input() taskId: string;
  @Input() listId: string;
  @Input() taskStatus: Array<any>;
  @Output() getTasks: EventEmitter<any> = new EventEmitter;

  baseUrl: string;
  edit: Boolean = false;
  


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.baseUrl = `${environment.baseUrl}/lists/${this.listId}/tasks/${this.taskId}`;
  }

  patchTask(form: NgForm) {
    this.http.patch(this.baseUrl, { name: form.value }).subscribe(() => {
      this.getTasks.emit();
    });
  }

  deleteTask() {
    this.http.delete(this.baseUrl).subscribe(() => {
      this.getTasks.emit();
    });
  }

  taskStatusHandler(id: string, form: NgForm) {
    console.log(id, form.value);
  }

}
