import { Component, OnInit } from '@angular/core';
import { LogginService } from '../../services/loggin.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private logginService: LogginService) { }

  ngOnInit(): void {
  }

  onClick() {
    // this.loggin();
    this.logginService.loggin();
  }

  // loggin(): void {
  //   console.log('Hello First Component');
  // }

}
