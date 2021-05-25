import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components_filter1/filter/filter.component';
import { FilterOptionComponent } from './components_filter1/filter-option/filter-option.component';
import { FilterOptionChildComponent } from './components_filter1/filter-option-child/filter-option-child.component';
import { FilterParentsComponent } from './components_filter2/filter-parents/filter-parents.component';
import { FilterOptionsComponent } from './components_filter2/filter-options/filter-options.component';
import { FilterConditionComponent } from './components_filter2/filter-condition/filter-condition.component';
import { SearchComponent } from './component_search/search/search.component';
import { DatePickerOneComponent } from './components_filter2/filter-condition/date-picker-one/date-picker-one.component';
import { ClickoutsideComponent } from './click_ouside/clickoutside/clickoutside.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterOptionComponent,
    FilterOptionChildComponent,
    FilterParentsComponent,
    FilterOptionsComponent,
    FilterConditionComponent,
    SearchComponent,
    DatePickerOneComponent,
    ClickoutsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
