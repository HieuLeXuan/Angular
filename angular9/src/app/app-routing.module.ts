import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componens/dashboard/dashboard.component';
import { PagenotfoundComponent } from './componens/pagenotfound/pagenotfound.component';
import { StudentformComponent } from './componens/studentform/studentform.component';
import { AboutComponent } from './componens/about/about.component';
import { StudentsComponent } from './componens/students/students.component';
import { HomeComponent } from './componens/home/home.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student-form', component: StudentformComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
