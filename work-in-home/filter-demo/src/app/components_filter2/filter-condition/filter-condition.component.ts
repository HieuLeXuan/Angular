import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SendDataOrtherComponentService } from 'src/app/service/send-data-orther-component.service';
import { Option, GroupOption } from '../class/option';
import { HttpClient } from '@angular/common/http';
import { Concatenations } from '../class/Concatenation';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-filter-condition',
  templateUrl: './filter-condition.component.html',
  styleUrls: ['./filter-condition.component.scss'],
})
export class FilterConditionComponent implements OnInit {
  @Output() closePopupCondition = new EventEmitter();
  @Input() groupOptionCurrent!: GroupOption;
  @Input() indexOptionCurrent!: number;
  typeOptionCurrent = '';
  concatenations: Concatenations[] = [];

  idConcatenation = '';
  concatenation = '';
  conditionValue = '';
  
  constructor(
    private sendDataOrtherService: SendDataOrtherComponentService,
    private httpClient: HttpClient,
  ) {}

  async ngOnInit(): Promise<void> {
    console.log(`group option current: ${JSON.stringify(this.groupOptionCurrent)}`);
    console.log(`index option current in filter condition: ${this.indexOptionCurrent}`);

    this.typeOptionCurrent = this.groupOptionCurrent.options[this.indexOptionCurrent].type;
    console.log(`type of option current: ${this.typeOptionCurrent}`);
    
    const data = await this.httpClient.get("assets/data/condition_type_" + this.typeOptionCurrent + ".json").toPromise();
    this.concatenations = JSON.parse(JSON.stringify(data));
    this.concatenation = this.concatenations[0].concatenationValue;

    this.conditionValue = this.groupOptionCurrent.options[this.indexOptionCurrent].conditionValue;
    this.idConcatenation = '1';
  }

  displayInputCondition(concatenationValue: string ,index: number) {
    const concatenation = this.concatenations[index];
    console.log(`index concatenation current: ${index}`);

    this.concatenation = concatenationValue;
    this.idConcatenation = (index+1).toString();
  }
  
  sendAdition(conditionValue: string) {
    this.groupOptionCurrent.options[this.indexOptionCurrent].concatenationValue = this.concatenation;
    this.groupOptionCurrent.options[this.indexOptionCurrent].conditionValue = conditionValue;
    this.sendDataOrtherService.sendData(JSON.stringify(this.groupOptionCurrent));
  }

  closePopup() {
    this.closePopupCondition.emit(true);
  }

  completeProcess() {
    // if (this.optionCurrent.conditionValue == '') {
    //   this.sendDataOrtherService.sendData(JSON.stringify(this.optionCurrent));
    // }
    // this.closePopupCondition.emit(true);
    // console.log(`Option in condition2: ${JSON.stringify(this.optionCurrent)}`);
  }
}
