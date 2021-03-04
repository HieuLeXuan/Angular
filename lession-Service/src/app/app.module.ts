import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './components/service/service.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

import { LogginService } from './services/loggin.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LogginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
