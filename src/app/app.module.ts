import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import { TokenInterceptor } from "./services/token.interceptor";
import { UserRegisterComponent } from './pages/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomepageComponent,
    UserProfileComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule, 
    BrowserAnimationsModule,
  

 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
