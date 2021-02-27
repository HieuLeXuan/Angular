import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() color: string;
  @Input() size: number;

  content = `Ngay trong đêm 30/1, Đoàn công tác của TP Hà Nội đã có cuộc họp khẩn với 
    UBND quận Nam Từ Liêm liên quan đến các ca nhiễm Covid-19 mới trên địa bàn quận. 
    Cuộc họp kết thúc lúc hơn 0h ngày 31/1 đã thống nhất về việc thành lập khu cách ly tập trung 
    tạm thời tại trường Tiểu học Xuân Phương.`;

  constructor() { }

  ngOnInit(): void {
  }

  setStyles() {
    return {
      'color': this.color,
      'font-size': this.size + 'px'
    }
  }

}
