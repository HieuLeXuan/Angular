import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  @Input() married: boolean;
  @Input() age: number;
  private _title: string;

  public txtFullName: string;
  public txtPhone: number;
  @Output('txtFullName') onHandleFullNames = new EventEmitter<string>();
  @Output('txtPhone') onHandlePhone = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  @Input()
  set title(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  onClick() {
    this.onHandleFullNames.emit(this.txtFullName);
    this.onHandlePhone.emit(this.txtPhone);
  }
}
