import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
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
  isOpenOption = false;

  // @ViewChild('filterCondition') filterCondition!: ElementRef;
  // @ViewChild('filterCondition2') filterCondition2!: ElementRef; 
  @ViewChild('filterMenu') filterMenu!: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.filterMenu && !this.filterMenu.nativeElement.contains(event.target)) {
      this.isOpenFilterMenu = false;
      this.isOpenFilterOption = false;
    }
  }

  constructor(
    private sendDataOrtherService: SendDataOrtherComponentService
  ) {}

  ngOnInit(): void {
    this.sendDataOrtherService.reciveData().subscribe((data) => {
      if (data) {
        const dataTemp = JSON.parse(data);
        this.listOptions[dataTemp.index].conditionValue = dataTemp.conditionValue;

        if (this.listOptions[dataTemp.index].conditionValue === '') {
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
    this.isOpenFilterCondition = false;
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
    // event.concatenationValue = '';
    this.listOptions.push(event);

    const lastIndex = this.listOptions.findIndex(x => x.index === event.index);
    event.index = lastIndex.toString();
    this.currentOption = event;

    this.openFilterCondition(event);
    console.log(`Option in parent1: ${JSON.stringify(this.currentOption)}`);
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
    // console.log(`Option when click open option: ${JSON.stringify(option)}`);
    // console.log(`isOpenFilterCondition: ${this.isOpenFilterCondition}`);
    // console.log(`Option when click open option: ${JSON.stringify(option)}`);

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
    console.log(`isOpenFilterCondition: ${this.isOpenFilterCondition}`);

    if (option) {
      option.index = this.indexCurrentOption.toString();
      this.arrInputValue = JSON.stringify(option);
    }
    // console.log(`Option in parent2: ${this.arrInputValue}`);
  }

  openOption() {
    this.isOpenOption = !this.isOpenOption;
  }
}
