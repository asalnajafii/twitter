import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComponentsComponent} from './components.component';
import {HomeComponent} from './home/home.component';
import {ExploreComponent} from './explore/explore.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {MessagesComponent} from './messages/messages.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {ListsComponent} from './lists/lists.component';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'explore',
        component: ExploreComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'bookmarks',
        component: BookmarksComponent,
      },
      {
        path: 'lists',
        component: ListsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComponentsRoutingModule {


}
