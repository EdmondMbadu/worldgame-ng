import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuard } from './services/auth.guard';
import { UserRegisterComponent } from './pages/user-register/user-register.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: UserLoginComponent },
  { path:  'register', component: UserRegisterComponent},
  { path: 'user-profile/:id', component: UserProfileComponent,canActivate: [AuthGuard]  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
