import { ForgotPasswordPageComponent } from './forgot-password/container/forgot-password-page.component';
import { SignupPageComponent } from './signup/container/signup-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/component/signup.component';
import { LoginComponent } from './login/component/login.component';
import { ForgotPasswordComponent } from './forgot-password/component/forgot-password.component';
import { LoginPageComponent } from './login/container/login-page.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    SignupPageComponent,
    LoginComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    ForgotPasswordPageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
