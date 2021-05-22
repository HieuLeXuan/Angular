import { HttpClient } from '@angular/common/http';
import { Option } from './../../components_filter2/class/option';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  options: Option[] = [];
  textSearch = '';

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/options.json").subscribe(data => {
      console.log(data);
      this.options = JSON.parse(JSON.stringify(data));
    });
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
