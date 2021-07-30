import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';

@NgModule({
  declarations: [

    MenuComponent,
    SidebarComponent,
    TweetBoxComponent,
  ],
  exports: [
    MenuComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutModule {
}
