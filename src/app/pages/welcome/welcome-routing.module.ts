import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule.forRoot()
  ],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
