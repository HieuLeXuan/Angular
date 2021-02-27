import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  public isSpecial = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleClick() {
    this.isSpecial = !this.isSpecial;
  }

  getClasses() {
      return { 
        'border-blue': this.isSpecial === true,
        'pd-10': this.isSpecial === true,
        'cl-red': this.isSpecial === true 
    }
  }

  setStyles() {
      return {
        'border': this.isSpecial ? 'solid 2px blue' : '',
        'padding.px' : this.isSpecial ? '10' : '',
        'color' : this.isSpecial ? 'red' : ''
    }
  }

}
