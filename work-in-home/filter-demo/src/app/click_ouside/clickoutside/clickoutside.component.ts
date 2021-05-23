import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clickoutside',
  templateUrl: './clickoutside.component.html',
  styleUrls: ['./clickoutside.component.scss']
})
export class ClickoutsideComponent implements OnInit {
  @ViewChild('txt') txt!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.txt.nativeElement.contains(event.target)) {
      console.log('clicked inside');
    } else {
      console.log('clicked outside');
    }
  }

}
