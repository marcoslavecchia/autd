import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EventsnewtaskPage } from './eventsnewtask.page';

const routes: Routes = [
  {
    path: '',
    component: EventsnewtaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [Location],
  declarations: [EventsnewtaskPage]
})
export class EventsnewtaskPageModule {}
