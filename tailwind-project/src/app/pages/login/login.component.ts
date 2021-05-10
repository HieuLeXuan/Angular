import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm!: FormGroup;

  constructor(
    private formBulder: FormBuilder,
  ) { 
    this.signInForm = this.formBulder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {}

  submitLogin() {
    console.log(`Email: ${this.signInForm.controls['email'].value} and 
                Password: ${this.signInForm.controls['password'].value}`);
  }
}
