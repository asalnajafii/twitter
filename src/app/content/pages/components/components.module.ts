import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsComponent} from './components.component';
import {ComponentsRoutingModule} from './components-routing.module';
import {LayoutModule} from '../../layout/layout.module';
import {RouterModule} from '@angular/router';
import {PartialsModule} from '../../partials/partials.module';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ListsComponent } from './lists/lists.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    ComponentsComponent,
    HomeComponent,
    ExploreComponent,
    NotificationsComponent,
    MessagesComponent,
    BookmarksComponent,
    ListsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LayoutModule,
    RouterModule,
    PartialsModule,
  ]
})
export class ComponentsModule {
}
