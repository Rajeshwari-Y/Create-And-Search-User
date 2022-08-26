import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public name!: string;
  public mobileNumber!: number;

  constructor(private router: Router,) {
  }

  ngOnInit(): void {

  }
  onSubmit(): void {

    let userObj = {
      name: this.name,
      mobileNumber: this.mobileNumber,
    }
    localStorage.setItem('userData', JSON.stringify(userObj));
    alert('User details saved successfully');   

  }
}
