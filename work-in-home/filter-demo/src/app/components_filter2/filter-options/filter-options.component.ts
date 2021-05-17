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
      selected: true,
      conditionValue: ''
    },
    {
      id: 2,
      icon: '../../../assets/images/icon-filter/home.svg',
      name: 'Country',
      selected: false,
      conditionValue: ''
    },
    {
      id: 3,
      icon: '../../../assets/images/icon-filter/home.svg',
      name: 'City',
      selected: false,
      conditionValue: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addOption(id: number) {
    // console.log(`id: ${id}`);
    const option = this.options.find((element) => element.id == id);
    // console.log(`option: ${JSON.stringify(option)}`);
    this.isOpenFilterOption.emit(true);
    this.sendDataOption.emit(option);
  }

}
