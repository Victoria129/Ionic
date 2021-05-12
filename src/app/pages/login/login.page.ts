import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validationUserMessage ={
    email: [
      {type:"required", message:"Please enter your Email!"},
      {type:"pattern", message:"The Email entered is incorrect. Try again"}
    ],
    password: [
      {type:"required", message:"Please enter your Password!"},
      {type:"minlength", message:"The Email entered is incorrect. Try again"}
    ]
  }

  validationFormUser: FormGroup;

  constructor(public formbuilder: FormBuilder, public authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z]+')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }
  LoginUser(value) {

    try{
      this.authservice.loginFireauth(value).then( resp => {
        console.log("I am logged in");
        this.router.navigate(['./tabs']);
      })
    }catch(err){
      console.log(err);
    }
  }
  goBack(){
    window.history.back();
  }
}








