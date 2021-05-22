import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent implements OnInit {
  @Output() isOpenFilterOption = new EventEmitter();
  @Output() sendDataOption = new EventEmitter();

  options = [
    {
      id: 1,
      name: 'First Name',
      concatenationValue: '',
      conditionValue: '',
      type: 'string'
    },
    {
      id: 2,
      name: 'Age',
      concatenationValue: '',
      conditionValue: '',
      type: 'number'
    },
    {
      id: 3,
      name: 'Date',
      concatenationValue: '',
      conditionValue: '',
      type: 'date'
    },
    {
      id: 4,
      name: 'Education',
      concatenationValue: '',
      conditionValue: '',
      type: 'enum'
    },
    {
      id: 5,
      name: 'Hazadous duties',
      concatenationValue: '',
      conditionValue: '',
      type: 'boolean'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addOption(id: number) {
    const option = this.options.find((element) => element.id === id);
    this.isOpenFilterOption.emit(true);
    this.sendDataOption.emit(option);
  }

}
