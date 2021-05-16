import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components_filter1/filter/filter.component';
import { FilterParentsComponent } from './components_filter2/filter-parents/filter-parents.component';

const routes: Routes = [
  {path: '', component: FilterParentsComponent},
  {path: 'filter1', component: FilterComponent},
  {path: 'filter2', component: FilterParentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
