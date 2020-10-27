import { SignupPageComponent } from './signup/container/signup-page.component';
import { LoginPageComponent } from './login/container/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordPageComponent } from './forgot-password/container/forgot-password-page.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'register', component: SignupPageComponent },
      { path: 'signin', component: LoginPageComponent },
      { path: 'forgotpassword', component: ForgotPasswordPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
