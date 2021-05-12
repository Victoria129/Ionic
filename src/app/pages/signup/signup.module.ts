import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import{ ReactiveFormsModule } from '@angular/forms';

import { SignupPage } from './signup.page';
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
