import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {AuthService} from "./auth.service";
import {Router} from '@angular/router';

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
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['username1', [Validators.required, Validators.required]],
      password: ['pass1', [Validators.required, Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit() {

  }

  onsubmit() {
    const dataFromLoginForm = this.loginForm.value;
    this.authService.login(dataFromLoginForm)
      .subscribe(
        (response: any) => {
          if (response) {
            console.log(response.user.id)
            this.router.navigate([`/users/${response?.user.id}/dashboard`]);

          }
        }
      );
  }


}
