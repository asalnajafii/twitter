import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule} from '@angular/router';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
  ]
})
export class PagesModule {
}
