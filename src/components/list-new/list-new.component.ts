import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.sass']
})
export class ListNewComponent implements OnInit {
  @Output() listChanged: EventEmitter<Array<any>> = new EventEmitter();

  baseUrl: string = `${environment.baseUrl}/lists`;
  collapsed: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getList();
  }

  collapse(form: NgForm): void {
    this.collapsed = !this.collapsed;

    form.controls.description.reset();
  }

  getList(): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {
      this.listChanged.emit(res.items);
    });
  }

  addList(form: NgForm): void {
    const payload = form.value;

    this.http.post(this.baseUrl, payload).subscribe(() => {
      form.resetForm();
      this.getList();
    });
  }

}
