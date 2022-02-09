import { ScrollingModule } from '@angular/cdk/scrolling'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDividerModule } from '@angular/material/divider'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthenticationInterceptorProviders } from './authentication.interceptor'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { LogsComponent } from './logs/logs.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [AppComponent, SignupComponent, LogsComponent, HomeComponent, LoginComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [AuthenticationInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
