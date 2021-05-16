import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components_filter1/filter/filter.component';
import { FilterOptionComponent } from './components_filter1/filter-option/filter-option.component';
import { FilterOptionChildComponent } from './components_filter1/filter-option-child/filter-option-child.component';
import { FilterParentsComponent } from './components_filter2/filter-parents/filter-parents.component';
import { FilterOptionsComponent } from './components_filter2/filter-options/filter-options.component';
import { FilterConditionComponent } from './components_filter2/filter-condition/filter-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterOptionComponent,
    FilterOptionChildComponent,
    FilterParentsComponent,
    FilterOptionsComponent,
    FilterConditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
