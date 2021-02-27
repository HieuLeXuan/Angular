import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colorDefault: string;
  fontSizeDefault: number;

  constructor() {
    this.init();
  }

  init() {
    this.colorDefault = 'red';
    this.fontSizeDefault = 16;
  }

  getColor(event) {
    this.colorDefault = event;
  }

  getSize(event) {
    this.fontSizeDefault = event;
  }

  getReset(event) {
    if (event) {
      this.init();
    }
  }
}
