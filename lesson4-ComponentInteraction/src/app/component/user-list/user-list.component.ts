import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users = [];
  @Input() fullName: string;
  @Input() phone: number;

  constructor() { }

  ngOnInit(): void {
  }

}
