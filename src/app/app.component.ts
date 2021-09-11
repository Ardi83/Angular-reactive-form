import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

type LoginUserModel = {
  email: string;
  password: string;
}

type RegisterUserModel = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  users: RegisterUserModel[] = [];
  model = {} as LoginUserModel;
  loggedIn = '';

  login() {
    const loggedInUser = this.users.find(user => user.email === this.model.email && user.password === this.model.password);
    this.loggedIn = loggedInUser ? 'valid' : 'invalid';
  }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('John', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, this.matchValues('password')])
    })
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const controls = control?.parent?.controls as { [key: string]: AbstractControl; }
      return controls && control?.value === controls[matchTo].value ? null : {isMatching: true}
    }
  }

  register() {
    this.users.push(this.registerForm.value);
  }
}
