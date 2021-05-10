import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { CardComponent } from './ui/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './ui/error/error.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthGuards } from './guards/auth.guards';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    CardComponent,
    DetailsComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'intro2angular' }),
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }

