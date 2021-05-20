import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';
import { SendDataOrtherComponentService } from 'src/app/service/send-data-orther-component.service';

@Component({
  selector: 'app-filter-condition',
  templateUrl: './filter-condition.component.html',
  styleUrls: ['./filter-condition.component.scss']
})
export class FilterConditionComponent implements OnInit {
  @Output() isDisplayInputAdition = new EventEmitter();
  @Output() closePopupAdition = new EventEmitter();

  idConcatenation: number = 1;

  concatenations = [
    {
      id: 1,
      linking_verb: 'is'
    },
    {
      id: 2,
      linking_verb: 'is not'
    },
    {
      id: 3,
      linking_verb: 'starts with'
    },
  ];

  constructor(
    private sendDataOrtherComponent: SendDataOrtherComponentService,
  ) { }

  ngOnInit(): void {
  }

  displayInputAdition(id: number) {
    const concatenation = this.concatenations.find((element) => element.id == id)
    this.isDisplayInputAdition.emit(concatenation?.linking_verb);

    this.idConcatenation = id;
  }

  sendAdition(aditionValue: string) {
    this.sendDataOrtherComponent.sendData(aditionValue);
  }

  closePopup() {
    this.closePopupAdition.emit(true);
  }

}
