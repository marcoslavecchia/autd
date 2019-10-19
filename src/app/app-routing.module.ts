import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'todo-details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 