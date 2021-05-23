import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SendDataOrtherComponentService } from 'src/app/service/send-data-orther-component.service';
import { Option } from '../class/option';
import { HttpClient } from '@angular/common/http';
import { Concatenations } from '../class/Concatenation';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-filter-condition',
  templateUrl: './filter-condition.component.html',
  styleUrls: ['./filter-condition.component.scss'],
})
export class FilterConditionComponent implements OnInit {
  @Output() isDisplayInputCondition = new EventEmitter();
  @Output() closePopupCondition = new EventEmitter();
  @Input() arrInputValue = '';
  @Input() isDeleteOption = false;
  @Input() optionCurrent!: Option;
  typeOption = '';
  idConcatenation = '';
  conditionValue = '';
  concatenations: Concatenations[] = [];

  constructor(
    private sendDataOrtherService: SendDataOrtherComponentService,
    private httpClient: HttpClient,
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.arrInputValue) {
      this.optionCurrent = JSON.parse(this.arrInputValue);
    }
    this.typeOption = this.optionCurrent.type;
    const data = await this.httpClient.get("assets/data/condition_type_" + this.optionCurrent.type + ".json").toPromise();
    this.concatenations = JSON.parse(JSON.stringify(data));

    console.log(`Array value: ${(this.arrInputValue)}`);
    // this.optionCurrent = JSON.parse(this.arrInputValue);

    console.log(`Type: ${(this.optionCurrent).type}`);

    this.conditionValue = '';
    if (this.arrInputValue) {
      this.conditionValue = JSON.parse(this.arrInputValue).conditionValue;
      const concatenation = this.concatenations.find((element: any) => element.id === 1);
      // tslint:disable-next-line:no-non-null-assertion
      this.idConcatenation = concatenation?.id!;
    } else {
      this.idConcatenation = '1';
    }

    console.log(`Option in condition1: ${JSON.stringify(this.optionCurrent)}`);
  }

  displayInputCondition(idConcatenation: string) {
    const concatenation = this.concatenations.find( element => element.id === idConcatenation );

    const concatenationOption = {
      concatenationValue: concatenation?.concatenationValue,
      conditionValue: JSON.parse(this.arrInputValue).conditionValue
    }

    this.isDisplayInputCondition.emit(concatenationOption);
    this.idConcatenation = idConcatenation;
  }

  sendAdition(conditionValue: string) {
    if (this.arrInputValue) {
      this.optionCurrent = JSON.parse(this.arrInputValue);  
    }
    // const concatenation = this.concatenations.find((element: any) => element.id === 1);
    // this.optionCurrent.concatenationValue = JSON.parse(JSON.stringify(concatenation)).concatenationValue;
    this.optionCurrent.conditionValue = conditionValue;
    this.sendDataOrtherService.sendData(JSON.stringify(this.optionCurrent));

    console.log(`Option in condition2: ${JSON.stringify(this.optionCurrent)}`);
  }

  closePopup() {
    this.closePopupCondition.emit(true);
  }
}
