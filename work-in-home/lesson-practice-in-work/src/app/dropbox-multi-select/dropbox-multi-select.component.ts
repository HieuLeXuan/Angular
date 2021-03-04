import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataService, Person } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dropbox-multi-select',
  templateUrl: './dropbox-multi-select.component.html',
  styleUrls: ['./dropbox-multi-select.component.scss']
})
export class DropboxMultiSelectComponent implements OnInit, OnChanges {

  people: Person[] = [];
  selectedPeople = [];

  constructor(private dataService: DataService) {
  }

  ngOnChanges(): void {
    
  }

  ngOnInit() {
    this.dataService.getPeople()
        .pipe(map(x => x.filter(y => !y.disabled)))
        .subscribe((res) => {
            this.people = res;
            this.selectedPeople = [];
        });          
  }

}
