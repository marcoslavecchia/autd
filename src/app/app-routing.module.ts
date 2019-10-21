import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'new-task', loadChildren: './pages/new-task/new-task.module#NewTaskPageModule' },
  
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 