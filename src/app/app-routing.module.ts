import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'eventshome', loadChildren: './pages/eventshome/eventshome.module#EventshomePageModule' },

  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  
  { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'eventsdetails/:id', loadChildren: './pages/eventsdetails/eventsdetails.module#EventsdetailsPageModule' },
 
  { path: 'new-task', loadChildren: './pages/new-task/new-task.module#NewTaskPageModule' },
  { path: 'eventsnewtask', loadChildren: './pages/eventsnewtask/eventsnewtask.module#EventsnewtaskPageModule' },
  
  
  
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 