import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'home',
        loadChildren:() =>
        import('./home.module').then(
          m => m.HomePageModule
        )
      },
     /* {
        path:'feed',
        loadChildren:() =>
        import('../feed/feed.module').then(
          m => m.FeedPageModule
        )
      },
      {
        path:'notifications',
        loadChildren:() =>
        import('../notifications/notifications.module').then(
          m => m.NotificationsPageModule
        )
      }*/

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

