import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.scss']
})
export class ViewToComponentComponent implements OnInit {

  public title = 'Event Binding';
  public count = 0;
  public userName = '';
  public name = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(event) {
    console.log(event);
  }

  onDbClickMe(event) {
    console.log(event.target.innerText);
  }

  // onInc() {
  //   this.count ++;
  // }

  onKeyup(event) {
    console.log(event.target.value);
    this.userName = event.target.value;
  }

  onKeyUpEnter(event) {
    this.name = event.target.value;
  }
}
