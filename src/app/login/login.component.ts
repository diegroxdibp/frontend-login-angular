import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  show: boolean;
  loginFailed: boolean;
  errorMessage: any;
  roles: string[] = [];
  loading$ = this.loader.loading$;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public loader: LoadingService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  submit(): void {
    const { email, password } = this.loginForm.controls;

    this.authenticationService.login(email.value, password.value).subscribe({
      next: (data) => {
        console.log(data);
        this.authenticationService.saveUser(data);
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);

        this.errorMessage = err.error;
        this.loginFailed = true;
      },
    });
  }
}
