import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {CreateIssue} from "./createIssue/CreateIssue.component";
import {HttpService} from "./httpService";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent, CreateIssue
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
