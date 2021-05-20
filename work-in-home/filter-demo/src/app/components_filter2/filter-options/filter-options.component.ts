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
      icon: '../../../assets/images/icon-filter/home.svg',
      name: 'Name',
      conditionValue: '',
      concatenationValue: ''
    },
    {
      id: 2,
      icon: '../../../assets/images/icon-filter/home.svg',
      name: 'Country',
      conditionValue: '',
      concatenationValue: ''
    },
    {
      id: 3,
      icon: '../../../assets/images/icon-filter/home.svg',
      name: 'City',
      conditionValue: '',
      concatenationValue: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addOption(id: number) {
    const option = this.options.find((element) => element.id == id);
    this.isOpenFilterOption.emit(true);
    this.sendDataOption.emit(option);
  }

}
