import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  validationMessage ={
    email: [
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is incorrect. Try again"}
    ],
    username: [
      {type:"required", message:"Please enter your Username!"},
      {type:"minlength", message:"The Username entered is incorrect. Try again"}
    ],
    password: [
      {type:"required", message:"Please enter your Password!"},
      {type:"minlength", message:"The Email entered is incorrect. Try again"}
    ]
  }

  validationFormUser: FormGroup;
  loading:any;
constructor(private formbuilder: FormBuilder, private authService: AuthService, public loadingCtrl: LoadingController, private alertCtrl:AlertController, private router: Router, private navCtr:NavController) {
    this.loading = this.loadingCtrl
}
    ngOnInit() {
      this.validationFormUser = this.formbuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z]+')
        ])),
        username: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ]))
      })
    }



  registerUser(value) {
    this.showalert();
      try{
    this.authService.userRegistration(value).then( response => {
      console.log(response);
      if (response.user){
          response.user.updateProfile({
          displayName:value.names,
          email: value.email,
          password: value.password
        });

        this.loading.dismiss();
        this.router.navigate(['./tabs']);
      }

      }, error=> {
        this.loading.dismiss();
        this.errorLoading(error.message);
      })

    }catch(error){
      console.log(error);
    }
      }


      async errorLoading(message:any){
        const loading = await this.alertCtrl.create({
          header:"Error Registering",
          message:message,
          buttons:[{
            text:'ok',
            handler:()=>{
              this.navCtr.navigateBack(['signup'])
          }
          }]
      })
      await loading.present();
    }

    async showalert(){
      var loader= await this.alertCtrl.create({
        message:"please wait....",
      })
      loader.present();

    }
  }
















