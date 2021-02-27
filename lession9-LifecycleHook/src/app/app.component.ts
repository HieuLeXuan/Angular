import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lession9-LifecycleHook';
  showing = false;

  onToggle() {
    this.showing = !this.showing;
    console.log(this.showing);
  }
}
