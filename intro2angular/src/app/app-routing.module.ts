import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CardComponent } from './ui/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppGuards } from './guards/app.guards';
import { AuthGuards } from './guards/auth.guards';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AppGuards]},
  // {path: 'details/:city', component: DetailsComponent},
  // {path: 'add', component: CardComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuards]},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuards]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
