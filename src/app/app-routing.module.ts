import { SignupComponent } from './signup/signup.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { LogsComponent } from './logs/logs.component'
import { AuthenticationGuard } from './authentication.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logs', component: LogsComponent, canActivate: [AuthenticationGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
