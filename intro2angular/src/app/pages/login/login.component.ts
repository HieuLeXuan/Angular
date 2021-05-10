import { Component, OnInit } from '@angular/core';
import { FbService } from 'src/app/service/fb.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage = '';

  constructor(
    public fb: FbService, 
    public router: Router,
    ) {
  }

  ngOnInit(): void {
  }

  async login(e: any) {
    await this.fb.signin(e.target.email.value, e.target.password.value)
      .then((result) => {
        this.fb.SetUserData(result.user);
        this.router.navigateByUrl('/');
      })
      .catch((error) => {
        console.log(error);
        this.errorMessage = error;
        setTimeout(() => this.errorMessage = '', 2000);
      });
  }
}
