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

  userEmail = '';

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
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  ngOnDestroy() {

  }
}
