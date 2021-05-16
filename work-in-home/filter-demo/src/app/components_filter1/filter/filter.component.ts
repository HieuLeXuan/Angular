import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  isOpen = false;
  isOpenOptionChild = false;
  option = '';

  optionsList:any[] = [];
  valueRecive: string = '';

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.receiveValue().subscribe((data) => {
      this.valueRecive = data;
    });
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  getOption(event: any) {
    let item = {
      option: event,
      valueSearch: ''
    }

    this.dataService.receiveValue().subscribe((data) => {
      this.optionsList.push(item);
    });

    this.isOpenOptionChild = true;
    this.isOpen = false;
    this.option = event;
  }

  locaseOption() {
    this.option = '';
  }

  closeOptionChild(event: boolean) {
    if (event) {
      this.isOpenOptionChild = false;
    }
  }
}
