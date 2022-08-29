import { AdminGuard } from './admin.guard';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { AuthenticationGuard } from './authentication.guard';
import { IframeComponent } from './iframe/iframe.component';
import { UsersComponent } from './users/users.component';
import { PanelsComponent } from './panels/panels.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: IframeComponent,  canActivate: [AuthenticationGuard] },
  { path: 'panels', component: PanelsComponent, canActivate: [AdminGuard] },
  { path: 'logs', component: LogsComponent, canActivate: [AdminGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
