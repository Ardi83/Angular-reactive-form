import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

type LoginUserModel = {
  email: string;
  password: string;
}

type RegisterUserModel = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  city: string;
  country: string;
  dateOfBirth: Date;
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
  maxDate: Date;

  constructor(private fb: FormBuilder) {}

  login() {
    const loggedInUser = this.users.find(user => user.email === this.model.email && user.password === this.model.password);
    this.loggedIn = loggedInUser ? 'valid' : 'invalid';
  }

  ngOnInit() {
    this.initializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
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
    console.log(this.users);
  }
}
