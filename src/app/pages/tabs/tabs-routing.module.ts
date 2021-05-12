import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {path:"home", loadChildren:()=>import('src/app/pages/home/home.module').then(res=>res.HomePageModule)},
      {path:"feed", loadChildren:()=>import('src/app/pages/feed/feed.module').then(res=>res.FeedPageModule)},
      {path:"notifications", loadChildren:()=>import('src/app/pages/notifications/notifications.module').then(res=>res.NotificationsPageModule)},
      {path:"favorites", loadChildren:()=>import('src/app/pages/favorites/favorites.module').then(res=>res.FavoritesPageModule)}
    ]
  },
  {
    path:"",
    redirectTo:"tabs/home",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}





