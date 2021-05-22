import { HttpClient } from '@angular/common/http';
import { Option } from './../../components_filter2/class/option';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent implements OnInit {
  @Output() isOpenFilterOption = new EventEmitter();
  @Output() sendDataOption = new EventEmitter();

  options: Option[] = [];
  searchOption = '';

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/options.json").subscribe(data => {
      this.options = JSON.parse(JSON.stringify(data));
      console.log(this.options);
    });
  }

  searchOptionLocal(event: any) {
    
  }

  addOption(index: string) {
    const option = this.options.find((element) => element.index === index);
    this.isOpenFilterOption.emit(true);
    this.sendDataOption.emit(option);
  }
}
