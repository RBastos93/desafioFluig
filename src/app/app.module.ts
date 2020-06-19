import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorModule } from './auth/intercerptor/interceptor.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { CookieService } from 'ngx-cookie-service';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskComponent } from '../components/task/task.component';
import { TaskStatusComponent } from '../components/task-status/task-status.component';
import { ListComponent } from '../components/list/list.component';
import { ListNewComponent } from '../components/list-new/list-new.component';
import { TaskNewComponent } from '../components/task-new/task-new.component';
import { InterceptorErrorModule } from './auth/intercerptor/http-error.interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToDoListComponent,
    TaskComponent,
    TaskStatusComponent,
    ListComponent,
    ListNewComponent,
    TaskNewComponent,
  ],           
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    InterceptorErrorModule,
    FormsModule,
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
