import { Component } from '@angular/core';

type LoginUserModel = {
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
      "id": "613946e2acfc97123f2ec459",
      "name": "John Doe",
      "email": "john@gmail.com",
      "password": "1234",
      "gender": "male",
      "phone": "(951) 532-2951"
    },
    {
      "id": "613946e21bd5b3db7a82286a",
      "name": "Burris Hicks",
      "email": "burrishicks@comveyor.com",
      "password": "4279",
      "gender": "male",
      "phone": "(941) 477-2779"
    },
    {
      "id": "613946e22c30da0fac9d7304",
      "name": "Gwen Townsend",
      "email": "gwentownsend@comveyor.com",
      "password": "8213",
      "gender": "female",
      "phone": "(808) 402-2494"
    },
    {
      "id": "613946e2dc8439015fcd07be",
      "name": "Wilder Cantu",
      "email": "wildercantu@comveyor.com",
      "password": "9397",
      "gender": "male",
      "phone": "(976) 488-3282"
    },
    {
      "id": "613946e20264931b5d1becf9",
      "name": "Christensen Bolton",
      "email": "christensenbolton@comveyor.com",
      "password": "1486",
      "gender": "male",
      "phone": "(835) 516-2990"
    },
    {
      "id": "613946e2ca3956b6ecb132b7",
      "name": "Madeleine Roberson",
      "email": "madeleineroberson@comveyor.com",
      "password": "8233",
      "gender": "female",
      "phone": "(816) 422-2017"
    },
    {
      "id": "613946e25a57b94ce594fdc0",
      "name": "Harding Strickland",
      "email": "hardingstrickland@comveyor.com",
      "password": "3837",
      "gender": "male",
      "phone": "(976) 588-2147"
    }
  ]
  model = {} as LoginUserModel;
  loggedIn = '';

  login() {
    const loggedInUser = this.users.find(user => user.email === this.model.email && user.password === this.model.password);
    this.loggedIn = loggedInUser ? 'valid' : 'invalid';
  }
}
