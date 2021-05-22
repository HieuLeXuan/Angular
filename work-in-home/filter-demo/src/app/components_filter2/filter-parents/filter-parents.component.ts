import { Component, OnInit } from '@angular/core';
import { Option } from '../class/option';
import { SendDataOrtherComponentService } from 'src/app/service/send-data-orther-component.service';

@Component({
  selector: 'app-filter-parents',
  templateUrl: './filter-parents.component.html',
  styleUrls: ['./filter-parents.component.scss']
})
export class FilterParentsComponent implements OnInit {
  //filter
  isOpenFilterMenu = false;
  isOpenFilterOption = false;
  isOpenFilterCondition = false;
  listOptions: Option[] = [];
  isDisplayButtonDelete = false;
  currentOption!: Option;
  arrInputValue = '';
  isDisableAddFilter = false;
  indexCurrentOption!: number;

  constructor(
    private sendDataOrtherService: SendDataOrtherComponentService
  ) {}

  ngOnInit(): void {
    // add conditionValue into last object
    this.sendDataOrtherService.reciveData().subscribe((data) => {
      if (data) {
        const dataTemp = JSON.parse(data);
        const lastIndex = this.listOptions.findIndex(x => x.conditionValue === dataTemp.conditionValue);
        this.listOptions[lastIndex].conditionValue = dataTemp.conditionValue;

        if (this.listOptions[lastIndex].conditionValue === '') {
          this.isDisableAddFilter = true;
        } else {
          this.isDisableAddFilter = false;
        }
      }
    });
  }

  // filter
  openFilterMenu(isDisableAddFilter: boolean) {
    if (!isDisableAddFilter) {
      this.isOpenFilterMenu = !this.isOpenFilterMenu;
    }
  }

  openFilterOption() {
    this.isOpenFilterOption = !this.isOpenFilterOption;
  }

  getValuable(event: boolean) {
    if (event) {
      this.isOpenFilterOption = false;
    }
  }

  getDataOption(event: Option) {
    this.isOpenFilterMenu = false;
    this.isOpenFilterCondition = true;
    event.concatenationValue = 'is';
    this.listOptions.push(event);

    this.currentOption = event;
    this.openFilterCondition(event);
  }

  deleteOption(conditionValue: string) {
    this.isDisableAddFilter = false;
    this.isOpenFilterCondition = false;
    const indexCurrentOption = this.listOptions.findIndex(x => x.conditionValue === conditionValue);

    if (indexCurrentOption > -1) {
      this.listOptions.splice(indexCurrentOption, 1);
    }
  }

  getConcatenationValue(event: Option) {
    const optionCurrent = this.listOptions.find((element) => element.conditionValue === event.conditionValue);
    (optionCurrent as Option).concatenationValue = event.concatenationValue;
  }

  closePopupCondition(event: boolean) {
    if (event === true) {
      this.isOpenFilterCondition = false;
    }
  }

  openFilterCondition(option: Option) {
    this.arrInputValue = '';
    this.indexCurrentOption = this.listOptions.findIndex(x => x.conditionValue === option.conditionValue);

    if (this.isOpenFilterCondition === true) {
      this.isOpenFilterCondition = false;
      setTimeout(() => {
        this.isOpenFilterCondition = true;
      }, 1);
    } else {
      this.isOpenFilterCondition = true;
    }

    if (option) {
      this.arrInputValue = JSON.stringify(option);
      console.log(`Arr Input Value: ${this.arrInputValue}`);
    }
  }

}
