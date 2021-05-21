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

  isDisplayButtonDelete = false;
  isCurrentOption!: string;
  arrInputValue: string = '';

  constructor(
    private sendDataOrtherService: SendDataOrtherComponentService
  ) {}

  ngOnInit(): void {
    //filter
    this.sendDataOrtherService.reciveData().subscribe((data) => {
      if (data) {
        let data_log = JSON.parse(data);
        let optionCurrent = this.listOptions.find((element) => element.id == data_log.idOptionCurrent);
        (optionCurrent as Option).conditionValue = data_log.conditionValue;
      }
    });
  }

  // filter
  openFilterOption() {
    this.isOpenFilterOption = !this.isOpenFilterOption;
  }

  getValuable(event: boolean) {
    if (event) {
      this.isOpenFilterOption = false;
    }
  }

  getDataOption(event: any) {
    this.isOpenFilterCondition = true;
    event.concatenationValue = 'is';
    this.listOptions.push(event);

    this.isCurrentOption = event.id;
  }

  deleteOption(id: string) {
    const optionDelete = this.listOptions.find((element) => element.id == id);
    let index = this.listOptions.indexOf(optionDelete as Option);
    if (index > -1) {
      this.listOptions.splice(index, 1);
    }
    this.isOpenFilterCondition = false;
  }

  getCondition(event: any) {
    let optionCurrent = this.listOptions.find((element) => element.id == event.idOptionCurrent);
    (optionCurrent as Option).concatenationValue = event.concatenationValue;
  }

  closePopupCondition(event: boolean) {
    if (event == true) {
      this.isOpenFilterCondition = false;
    }
  }

  openFilterCondition(id: string, concatenationValue: string, conditionValue: string) {
    if (this.isOpenFilterCondition == true) {
      this.isOpenFilterCondition = false;
      setTimeout(() => {
        this.isOpenFilterCondition = true;
      },1);      
    } else {
      this.isOpenFilterCondition = true;
    }
    // console.log(`${id}, ${concatenationValue}, ${conditionValue}`);

    if (id && concatenationValue && conditionValue) {
      this.arrInputValue = '';
      const infoInput = {
        id: id,
        concatenationValue: concatenationValue,
        conditionValue: conditionValue
      }
      this.arrInputValue = JSON.stringify(infoInput);
    }
  }

}
