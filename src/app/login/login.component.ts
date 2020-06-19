import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const { email, password } = form.value;
    const { accessUrl } = environment;

    const regex = new RegExp(/\<USERNAME>|<PASSWORD>/, 'g');
    const replaceParams = {
      '<USERNAME>': email,
      '<PASSWORD>': password,
    };

    const url = accessUrl.replace(regex, (param) => replaceParams[param]);

    this.http.post(url, {}).subscribe(response => {
      this.cookieService.set('token', response['access_token']);

      this.router.navigate(['toDoList']);
    });
  }
}
