import { Component, OnInit } from '@angular/core'
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'
import { AuthenticationService } from '../authentication.service'
import { LoadingService } from '../loading.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isSuccessful: boolean;
  errorMessage: string;
  show: boolean;
  loginForm: FormGroup;
  loading$ = this.loader.loading$;

  constructor (
    private authService: AuthenticationService,
    public loader: LoadingService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  ngOnInit (): void {}

  submit (): void {
    const { email, password } = this.loginForm.controls

    this.authService.register(email.value, password.value).subscribe({
      next: (data) => {
        console.log(data)
        this.isSuccessful = true
      },
      error: (err) => {
        console.log(err)
        this.errorMessage = err.error.message
      }
    })
  }
}
