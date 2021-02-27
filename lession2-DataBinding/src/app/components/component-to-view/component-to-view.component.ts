import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.scss']
})
export class ComponentToViewComponent implements OnInit {

  public user = {
    name : 'hieu',
    age : 24,
    isMarried : false
  }
  public img_link = 'https://file.vfo.vn/hinh/2018/12/girl-xinh-hinh-anh-girl-xinh-dep-nhat-quyen-ru-49.jpg';
  public link = 'http://google.com';
  public text_link = 'google';
  public img_width = 500;
  public isValid = false;
  public tbWidth = 500;
  public tbBorder = 0;

  public isBorder = false;
  public isChecked = 1;

  public isSpecial = true;

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    return `${this.user['name']}`;
  }

}
