import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CardComponent} from './card/card.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    CardComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
  ],
  exports: [
    CardComponent,
    MatCardModule
  ],

})
export class PartialsModule {
}
