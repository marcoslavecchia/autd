import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';
 
import { TabsPage } from './tabs.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
        { path: 'tab1', loadChildren: '././../tab1/tab1.module#Tab1PageModule' },
        { path: 'home', loadChildren: '././../home/home.module#HomePageModule' },
        { path: 'eventshome', loadChildren: '././../eventshome/eventshome.module#EventshomePageModule' },
       
        { path: 'details', loadChildren: '././../details/details.module#DetailsPageModule' },
        { path: 'eventsdetails', loadChildren: '././../eventsdetails/eventsdetails.module#EventsdetailsPageModule' },
        
    ]
  },
  {
    path:'',
    redirectTo:'tab1',
    pathMatch:'full'
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
 