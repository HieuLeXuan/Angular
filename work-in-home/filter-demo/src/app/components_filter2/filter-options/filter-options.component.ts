import { HttpClient } from '@angular/common/http';
import { Option, GroupOption } from './../../components_filter2/class/option';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent implements OnInit {
  @Output() indexOptionCurrent = new EventEmitter();
  @Output() sendDataOption = new EventEmitter();

  options: Option[] = [];
  textSearch = '';

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/options.json").subscribe(data => {
      this.options = JSON.parse(JSON.stringify(data));
    });
  }

  addOption(index: number) {
    const groupOption = new GroupOption();
    groupOption.options = [];

    groupOption.groupType = "and";
    groupOption.options.push(this.options[index]);

    this.indexOptionCurrent.emit(groupOption.options.length - 1);
    this.sendDataOption.emit(groupOption);
  }

  searchLocalOption() {
    if (this.textSearch != '') {
      this.options = this.options.filter(res => {
        return res.name.toLocaleLowerCase().match(this.textSearch.toLocaleLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }
}
