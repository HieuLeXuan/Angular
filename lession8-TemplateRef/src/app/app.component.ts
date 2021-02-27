import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('txtName') name : ElementRef

  onGetData(txtName) : void {
    console.log(txtName.value);
  }

  onGetDataComponent() : void {
    console.log(this.name.nativeElement.value);
  }
}
