import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass']
})
export class ToDoListComponent implements OnInit {
  lists: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  listChangedHandler(lists: Array<any>) {
    this.lists = [...lists];
  }

}
