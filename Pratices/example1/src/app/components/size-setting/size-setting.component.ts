import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size-setting',
  templateUrl: './size-setting.component.html',
  styleUrls: ['./size-setting.component.scss']
})
export class SizeSettingComponent implements OnInit {

  @Input() size: number;
  @Output('outSize') sizeConnector = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  InSize() {
    if (this.size + 2 <= 36) {
      this.size += 2;
    }
    this.sizeConnector.emit(this.size);
  }

  ReSize() {
    if (this.size - 2 >= 8) {
      this.size -= 2;
    }
    this.sizeConnector.emit(this.size);
  }
}
