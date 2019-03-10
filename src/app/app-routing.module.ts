import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component: PasswordlessAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
