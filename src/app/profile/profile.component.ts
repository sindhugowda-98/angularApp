import { Component, OnInit } from '@angular/core';
import {Profile} from './Profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 public x : string ="Excuse me";
 title: string = "Hakuna matata"
  profileList : Profile[]=[
    {
     uid: 1,
    firstName:"sindhu",
    lastName:"D",
    email:"sin@gmail.com",
    location :"Bangalore"

  },
 { uid: 2,
  firstName:"vindhu",
  lastName:"m",
  email:"ssdin@gmail.com",
  location :"Bangalore"
 }

];
  constructor() { }

  ngOnInit(): void {
  }
  exampleMethoD(): string {
    return "Wait What?"
  }
}
