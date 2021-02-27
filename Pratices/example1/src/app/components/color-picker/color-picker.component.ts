import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Output('outColor') colorConnector = new EventEmitter<string>();

  colors = [];

  constructor() { }

  ngOnInit(): void {
    this.colors = ['red', 'green', 'blue', 'gray', 'purple', 'orange'];
  }

  returnColor(color) {
    this.colorConnector.emit(color);
  }

}
