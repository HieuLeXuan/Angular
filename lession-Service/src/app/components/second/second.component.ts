import { Component, OnInit } from '@angular/core';
import { LogginService } from '../../services/loggin.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private logginService: LogginService) { }

  ngOnInit(): void {
  }

  onClick() {
    // this.loggin();
    this.logginService.loggin();
  }

  // loggin(): void {
  //   console.log('Hello Second Component');
  // }

}
