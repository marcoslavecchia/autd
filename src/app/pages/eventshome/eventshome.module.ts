import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventshomePage } from './eventshome.page';
import { EventsHomeResolver } from './eventshome.resolver';

const routes: Routes = [
  {
    path: '',
    component: EventshomePage,
    resolve: {
      data: EventsHomeResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventshomePage],
  providers: [
    EventsHomeResolver
  ]
})
export class EventshomePageModule {}
