import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
  public isShow = true;
  public user = 'hieu';
  public isChecked = false;
  public age: number;

  public names = ['TPHCM', 'HN'];
  public dataFromServers = ['TPHCM', 'HN', 'VL', 'LA'];
  public products = [];

  public users = [
    {
      name: 'Peter',
      country: 'USA'
    },
    {
      name: 'Hieu',
      country: 'VN'
    },
    {
      name: 'Peter Smith',
      country: 'Russia'
    },
    {
      name: 'Taylor',
      country: 'China'
    },
    {
      name: 'Peter',
      country: 'USA'
    }
  ];

  public productsFromServer = [
    {
      id: 1,
      name: 'Girl1',
      image: 'https://lh3.googleusercontent.com/proxy/oMBm0Bv-UkG4a3Yo5zG3ESGkQcrlI8pVBFDyJMOVx9thTxeSbg3hxQbD2VLsxi0XmDmdxeQEaHsp3IGxpF2DRmTJH1JtEVEGCU8wjMSOspkOVETuB1QQ_yb59-YhUDc8LL5tAA'
    },
    {
      id: 2,
      name: 'Girl2',
      image: 'https://lh3.googleusercontent.com/proxy/oMBm0Bv-UkG4a3Yo5zG3ESGkQcrlI8pVBFDyJMOVx9thTxeSbg3hxQbD2VLsxi0XmDmdxeQEaHsp3IGxpF2DRmTJH1JtEVEGCU8wjMSOspkOVETuB1QQ_yb59-YhUDc8LL5tAA'
    },
    {
      id: 3,
      name: 'Girl3',
      image: 'https://lh3.googleusercontent.com/proxy/oMBm0Bv-UkG4a3Yo5zG3ESGkQcrlI8pVBFDyJMOVx9thTxeSbg3hxQbD2VLsxi0XmDmdxeQEaHsp3IGxpF2DRmTJH1JtEVEGCU8wjMSOspkOVETuB1QQ_yb59-YhUDc8LL5tAA'
    },
    {
      id: 4,
      name: 'Girl4',
      image: 'https://lh3.googleusercontent.com/proxy/oMBm0Bv-UkG4a3Yo5zG3ESGkQcrlI8pVBFDyJMOVx9thTxeSbg3hxQbD2VLsxi0XmDmdxeQEaHsp3IGxpF2DRmTJH1JtEVEGCU8wjMSOspkOVETuB1QQ_yb59-YhUDc8LL5tAA'
    }
  ]

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.isShow = !this.isShow;
  }

  onChange(value) {
    this.isChecked = value;
  }

  onLoadData() {
    this.products = this.productsFromServer;
  }

  myTrackByFunction(index, item) {
    return item.id;
  }
}
