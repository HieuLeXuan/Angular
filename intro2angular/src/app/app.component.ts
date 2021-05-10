import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from './service/ui.service';
import { FbService } from './service/fb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showMenu = false;
  darkModeActive!: boolean;

  userEmail!: null | string;

  loggedIn = this.fb.isAuth();
  sub1: any;

  constructor(
    public ui: UiService,
    public fb: FbService, 
    public router: Router, ) {
  }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });

    this.fb.auth.authState.subscribe((auth__state) => {
      if (auth__state) {
        console.log(`Email login: ${auth__state.email}`);
        this.userEmail = auth__state.email;
      }
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  logout() {
    this.toggleMenu();
    this.router.navigateByUrl('/login');
    this.fb.auth.signOut();
  }
}
