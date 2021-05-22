import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SendDataOrtherComponentService } from 'src/app/service/send-data-orther-component.service';
import { Option } from '../class/option';

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

  // restructure fuilter
  @Input() optionCurrent!: Option;
  // get type from options parents
  typeOption = '';

  idConcatenation!: number;
  conditionValue = '';

  concatenations = [
    {
      id: 1,
      concatenationValue: 'is',
    },
    {
      id: 2,
      concatenationValue: 'is not',
    },
    {
      id: 3,
      concatenationValue: 'contains',
    },
    {
      id: 4,
      concatenationValue: 'is unknown',
    },
    {
      id: 5,
      concatenationValue: 'has any value',
    },
  ];

  constructor(private sendDataOrtherService: SendDataOrtherComponentService) {}

  ngOnInit(): void {
    if (this.optionCurrent.type === 'string') {
      this.typeOption = this.optionCurrent.type;
    }

    this.conditionValue = '';
    if (this.arrInputValue) {
      this.conditionValue = JSON.parse(this.arrInputValue).conditionValue;
      const concatenation = this.concatenations.find(
        (element: any) =>
          element.concatenationValue ===
          JSON.parse(this.arrInputValue).concatenationValue
      );
      // tslint:disable-next-line:no-non-null-assertion
      this.idConcatenation = concatenation?.id!;
    } else {
      this.idConcatenation = 1;
    }
  }

  displayInputCondition(idConcatenation: number) {
    const concatenation = this.concatenations.find( element => element.id === idConcatenation );

    const concatenationOption = {
      concatenationValue: concatenation?.concatenationValue,
      conditionValue: JSON.parse(this.arrInputValue).conditionValue
    }

    this.isDisplayInputCondition.emit(concatenationOption);
    this.idConcatenation = idConcatenation;
  }

  sendAdition(conditionValue: string) {
    this.optionCurrent.conditionValue = conditionValue;
    this.sendDataOrtherService.sendData(JSON.stringify(this.optionCurrent));
  }

  closePopup() {
    this.closePopupCondition.emit(true);
  }
}
