import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CreateIssue} from "./createIssue/CreateIssue.component";
import {HttpService} from "./httpService";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent, CreateIssue
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
