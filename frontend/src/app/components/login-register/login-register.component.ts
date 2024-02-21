import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {AuthService} from "./auth.service";

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.required]],
      password: ['', [Validators.required, Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit() {

  }

  onsubmit() {
    const dataFromLoginForm = this.loginForm.value;
    this.authService.login(dataFromLoginForm).subscribe((r) => console.log(r))
  }


}
