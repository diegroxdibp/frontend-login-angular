import { SignupComponent } from './signup/signup.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { LogsComponent } from './logs/logs.component'
import { AuthenticationGuard } from './authentication.guard'
import { IframeComponent } from './iframe/iframe.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logs', component: LogsComponent, canActivate: [AuthenticationGuard] },
  { path: 'iframe', component: IframeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
