import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  loginForm: FormGroup;

   showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {}

   ionViewWillEnter() {
    this.menu.enable(false); // disables side menu
  }

  ionViewWillLeave() {
    this.menu.enable(true); // re-enables when leaving login page
  }
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private menu: MenuController
    ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  login() {
    // if (this.loginForm.valid) {
    //   const { userName, password } = this.loginForm.value;
      this.router.navigate(['dashboard'])
    // }
  }

  goToForgotPassword() {
    // Navigate to forgot-password page
  }
}
