import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { element } from 'protractor';
import { SendDataOrtherComponentService } from 'src/app/service/send-data-orther-component.service';

@Component({
  selector: 'app-filter-condition',
  templateUrl: './filter-condition.component.html',
  styleUrls: ['./filter-condition.component.scss']
})
export class FilterConditionComponent implements OnInit {
  @Output() isDisplayInputCondition = new EventEmitter();
  @Output() closePopupCondition = new EventEmitter();
  @Input() idOptionCurrent!: string;
  @Input() arrInputValue: string = '';

  idConcatenation!: number;
  valueInput:string = '';
  
  concatenations = [
    {
      id: 1,
      concatenationValue: 'is'
    },
    {
      id: 2,
      concatenationValue: 'is not'
    },
    {
      id: 3,
      concatenationValue: 'starts with'
    },
  ];

  constructor(
    private sendDataOrtherService: SendDataOrtherComponentService,
  ) { }

  ngOnInit(): void {
    this.valueInput = '';
    if (this.arrInputValue) {
      this.valueInput = JSON.parse(this.arrInputValue).conditionValue;
      this.idOptionCurrent = JSON.parse(this.arrInputValue).id;

      // const a = this.concatenations.find((element) => {
      //   element.concatenationValue = JSON.parse(this.arrInputValue).concatenationValue;
      // });
      this.idConcatenation = 2;
    } else {
      this.idConcatenation = 1;
    }
  } 

  displayInputCondition(id: number) {
    const concatenation = this.concatenations.find((element) => element.id == id);
    let concatenationOption = {
      idOptionCurrent: this.idOptionCurrent,
      concatenationValue: concatenation?.concatenationValue
    }
    this.isDisplayInputCondition.emit(concatenationOption);
    this.idConcatenation = id;
  }

  sendCondition(conditionValue: string) {
    let conditionOption = {
      idOptionCurrent: this.idOptionCurrent,
      conditionValue: conditionValue
    }
    this.sendDataOrtherService.sendData(JSON.stringify(conditionOption));
  }

  closePopup() {
    this.closePopupCondition.emit(true);
  }

}
