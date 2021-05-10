import { Component, OnInit } from '@angular/core';
import { FbService } from 'src/app/service/fb.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage = '';

  constructor(
    public fb: FbService, 
    public router: Router,
    ) {
  }

  ngOnInit() {
  }

  async signup(e: any) {
    await this.fb.signup(e.target.email.value, e.target.password.value);
  }
}
