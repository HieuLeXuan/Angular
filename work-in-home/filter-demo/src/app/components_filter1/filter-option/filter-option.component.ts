import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.scss']
})
export class FilterOptionComponent implements OnInit {

  @Output() optionFilter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addOption() {
    this.optionFilter.emit('Name');
  }

}
