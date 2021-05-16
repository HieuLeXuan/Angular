import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-filter-option-child',
  templateUrl: './filter-option-child.component.html',
  styleUrls: ['./filter-option-child.component.scss']
})
export class FilterOptionChildComponent implements OnInit {
  valueInput:string = '';

  @Output() isDisplay = new EventEmitter();

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
  }

  sendValue(value: string) {
    this.dataService.sendValue(value);
  }

  closePopup() {
    this.isDisplay.emit(true);
  }

}
