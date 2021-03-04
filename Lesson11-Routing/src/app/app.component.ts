import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Routing';

  constructor(
    private routerService: Router
  ) {

  }

  navigate(url) {
    // this.routerService.navigate([url]);
    this.routerService.navigateByUrl(url);
  }
}
