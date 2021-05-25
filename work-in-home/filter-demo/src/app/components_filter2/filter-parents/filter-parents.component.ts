import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Option, GroupOption } from '../class/option';
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
  isDisplayButtonDelete = false;
  isDisableAddFilter = false;

  isOpenOption = false;

  listGroupOptions: GroupOption[] = [];
  currentGroupOption!: GroupOption;
  filterMenuName = '';
  indexOptionCurrent!: number;

  // @ViewChild('filterMenu') filterMenu!: ElementRef;

  // @HostListener('document:click', ['$event'])
  // clickout(event: any) {
  //   if (this.filterMenu && !this.filterMenu.nativeElement.contains(event.target)) {
  //     this.isOpenFilterMenu = false;
  //     this.isOpenFilterOption = false;
  //   }
  // }

  constructor(
    private sendDataOrtherService: SendDataOrtherComponentService
  ) {}

  ngOnInit(): void {
    //filter
    this.sendDataOrtherService.reciveData().subscribe((data) => {      
      if (data) {
        const dataTemp = JSON.parse(JSON.stringify(data));
        console.log(`current group option: ${dataTemp}`);

        const indexOption = Number(localStorage.getItem('index of option current'));
        const indexGroupOption = Number(localStorage.getItem('index of group option current'));

        if (indexOption && indexGroupOption) {
          let conditionValue = this.listGroupOptions[indexGroupOption].options[indexOption].conditionValue
          conditionValue = dataTemp.conditionValue;

          if (conditionValue === '') {
            this.isDisableAddFilter = true;
          } else {
            this.isDisableAddFilter = false;
          }
        }
      }
    });
  }

  // filter
  openFilterMenu(isDisableAddFilter: boolean) {
    this.isOpenFilterCondition = false;
    if (!isDisableAddFilter) {
      this.isOpenFilterMenu = !this.isOpenFilterMenu;
    }
  }

  openFilterOption(filterMenuName: string) {
    this.filterMenuName = filterMenuName;
    this.isOpenFilterOption = !this.isOpenFilterOption;
  }

  // and/ or
  openOption() {
    this.isOpenOption = !this.isOpenOption;
  }

  getDataOption(event: GroupOption) {
    this.isOpenFilterMenu = false;
    this.isOpenFilterOption = false;
    this.isOpenFilterCondition = true;
    if (this.isOpenFilterCondition == true) {
      this.isDisableAddFilter = true;
    }
    
    this.listGroupOptions.push(event);
    event.options[this.indexOptionCurrent].filterMenuName = this.filterMenuName;
    console.log(this.listGroupOptions);
    this.currentGroupOption = event;

    localStorage.setItem('index of option current', this.indexOptionCurrent.toString());
    localStorage.setItem('index of group option current', (this.listGroupOptions.length - 1).toString());
  }

  getIndexOptionCurrent(event: number) {
    this.indexOptionCurrent = event;
    console.log(`index option current: ${event}`);
  }

  deleteOption(index: number) {
    this.isDisplayButtonDelete = false;
    this.isDisableAddFilter = false;
    this.isOpenFilterCondition = false;
    if (this.isOpenFilterCondition == false) {
      this.isDisableAddFilter = false;
    }
    this.listGroupOptions.splice(index, 1);
  }

  closePopupCondition(event: boolean) {
    if (event === true) {
      this.isOpenFilterCondition = false;
    }
    if (this.isOpenFilterCondition == false) {
      this.isDisableAddFilter = false;
    }
  }

  openFilterCondition(groupOption: GroupOption, index: number) {
    localStorage.setItem('index of group option current', index.toString());
    console.log(`array group option: ${JSON.stringify(this.listGroupOptions)}`);

    if (this.isOpenFilterCondition === true) {
      this.isOpenFilterCondition = false;
      setTimeout(() => {
        this.isOpenFilterCondition = true;
      }, 1);
    } else {
      this.isOpenFilterCondition = true;
    }
    this.currentGroupOption = groupOption;
  }

  get indexGroupOption() {
    return Number(localStorage.getItem('index of group option current'));
  }
}
