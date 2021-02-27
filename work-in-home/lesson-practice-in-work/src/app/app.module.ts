import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropboxMultiSelectComponent } from './dropbox-multi-select/dropbox-multi-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DropboxMultiSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
