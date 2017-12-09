import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloEnvironmentComponent } from './hello-environment/hello-environment.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloEnvironmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
