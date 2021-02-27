import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  @Output('outReset') outReset = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.outReset.emit(true);
  }

}
