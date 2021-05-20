import { Component, OnInit } from '@angular/core';
import { Option } from '../class/option';
import { SendDataOrtherComponentService } from 'src/app/service/send-data-orther-component.service';

@Component({
  selector: 'app-filter-parents',
  templateUrl: './filter-parents.component.html',
  styleUrls: ['./filter-parents.component.scss']
})
export class FilterParentsComponent implements OnInit {
  isOpenFilterOption = false;
  isOpenFilterCondition = false;
  listOptions: Option[] = [];

  concatenationValue: string = 'is';
  conditionValue: string = '';

  isDisplayButtonDelete: boolean = false;

  constructor(
    private sendDataOrtherComponent: SendDataOrtherComponentService,
  ) { }

  ngOnInit(): void {
    // console.log(`option: ${JSON.stringify(this.listOptions)}`);
    this.sendDataOrtherComponent.reciveData().subscribe((data) => {
      this.conditionValue = data;
    });

    this.listOptions = JSON.parse(localStorage.getItem('listOptions') || '{}');
  }

  openFilterOption() {
    // console.log('filter option!!');
    this.isOpenFilterOption = !this.isOpenFilterOption;
  }

  getValuable(event: boolean) {
    if (event) {
      this.isOpenFilterOption = false;
    }
  }

  getDataOption(event: any) {
    this.concatenationValue = 'is';
    this.conditionValue = '';

    this.isOpenFilterCondition = true;
    this.listOptions.push(event);
    // console.log(`option: ${JSON.stringify(this.listOptions)}`);
    // localStorage.setItem('listOptions', JSON.stringify(this.listOptions));
  }

  deleteOption(id: string) {
    console.log('delete option !!!');

    const optionDelete = this.listOptions.find((element) => element.id == id);
    let index = this.listOptions.indexOf(optionDelete as Option);
    if (index > -1) {
      this.listOptions.splice(index, 1);
    }
    // localStorage.setItem('listOptions', JSON.stringify(this.listOptions));
    this.isOpenFilterCondition = false;
  }

  getCondition(event: string) {
    // console.log(`Condition: ${event}`);
    this.concatenationValue = event;
  }

  closePopupAdition(event: boolean) {
    if (event == true) {
      this.isOpenFilterCondition = false;
    }
  }

  openFilterCondition() {
    this.isOpenFilterCondition = true;
  }

  // mouseover() {
  //   this.isDisplayButtonDelete = true;
  // }

  // mouseleave() {
  //   this.isDisplayButtonDelete = false;
  // }

}
