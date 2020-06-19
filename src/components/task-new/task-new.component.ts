import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.sass']
})
export class TaskNewComponent implements OnInit {
  @Input() listId: string;
  @Output() getTasks: EventEmitter<any> = new EventEmitter;

  add: Boolean = false;
  baseUrl: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.baseUrl = `${environment.baseUrl}/lists/${this.listId}/tasks`;
  }

  addTask(form: NgForm): void {
    this.http.post(this.baseUrl, { name: form.value.name }).subscribe(() => {
      this.getTasks.emit();
      this.add = false;
      form.resetForm();
    });
  }

}
