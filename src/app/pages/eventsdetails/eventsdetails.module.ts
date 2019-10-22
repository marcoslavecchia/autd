import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsdetailsPage } from './eventsdetails.page';
import { EventsDetailsResolver } from './eventsdetails.resolver';

const routes: Routes = [
  {
    path: '',
    component: EventsdetailsPage,
    resolve: {
      data: EventsDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventsdetailsPage],
  providers:[EventsDetailsResolver]
})
export class EventsdetailsPageModule {}
