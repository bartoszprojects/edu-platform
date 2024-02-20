import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.sass'
})
export class LoginRegisterComponent  implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.required]],
      password: ['', [Validators.required, Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {

  }

  onsubmit() {

  }


}
