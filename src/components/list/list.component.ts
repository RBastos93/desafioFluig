import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input() list: any;
  @Input() listId: string;
  
  collapsed: Boolean = false;
  name: string;
  baseUrl: string;
  tasks: Array<any>;
  taskStatus: Array<any>;
  edit: Boolean = false;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.baseUrl = `${environment.baseUrl}/lists/${this.listId}`;
  }

  getTasks() {
    this.http.get(`${this.baseUrl}/tasks`).subscribe((res: any) => {
      this.tasks = [...res.items];
      this.getTaskStatus();
    });
  }

  getTaskStatus() {
    this.http.get(`${this.baseUrl}/task-status`).subscribe((res: any) => {
      this.taskStatus = [...res.items];
    });
  }

}
