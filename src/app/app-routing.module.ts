import { AdminGuard } from './admin.guard';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { AuthenticationGuard } from './authentication.guard';
import { IframeComponent } from './iframe/iframe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RolesComponent } from './roles/roles.component';
import { CommercialComponent } from './commercial/commercial.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: CommercialComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/iframe', component: IframeComponent },
  { path: 'logs', component: LogsComponent, canActivate: [AdminGuard] },
  { path: 'roles', component: RolesComponent, canActivate: [AdminGuard] },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
