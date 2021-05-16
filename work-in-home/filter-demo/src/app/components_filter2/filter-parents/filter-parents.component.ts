import { Component, OnInit } from '@angular/core';
import { Option } from '../class/option';

@Component({
  selector: 'app-filter-parents',
  templateUrl: './filter-parents.component.html',
  styleUrls: ['./filter-parents.component.scss']
})
export class FilterParentsComponent implements OnInit {
  isOpenFilterOption = false;
  listOptions: Option[] = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(`option: ${JSON.stringify(this.listOptions)}`);
  }

  openFilterOption() {
    console.log('filter option!!');
    this.isOpenFilterOption = !this.isOpenFilterOption;
  }

  getValuable(event: boolean) {
    if (event) {
      this.isOpenFilterOption = false;
    }
  }

  getDataOption(event: Option) {
    this.listOptions.push(event);
    console.log(`option: ${JSON.stringify(this.listOptions)}`);
  }
}
