import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.sass']
})
export class TaskStatusComponent implements OnInit {
  @Input() taskStatus: Array<any>;
  @Output() selectedStatus: EventEmitter<any> = new EventEmitter;

  status: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  selected(event: any) {
    this.selectedStatus.emit(event.target.value);
  }

}
