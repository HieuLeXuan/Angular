import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isMarried = false;
  public age = 18;

  public users = [
    {
      id: 1,
      name: 'A',
      phone: '123'
    },
    {
      id: 2,
      name: 'B',
      phone: '456'
    },
    {
      id: 3,
      name: 'C',
      phone: '789'
    }
  ];
  public txtFullName: string;
  public txtPhone: number;

  onHandleFullName(value) {
    this.txtFullName = value;
  }

  onHandlePhone(value) {
    this.txtPhone = value;
  }
}
