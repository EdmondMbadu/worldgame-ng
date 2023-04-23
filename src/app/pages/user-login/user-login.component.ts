import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { UserCredentials } from "../../types/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
logInForm:any
errorMessage: string ="";
constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router){
  this.logInForm = this.formBuilder.group({
    username:['', Validators.required],
    password: ['', Validators.required]
  })

}
  ngOnInit(): void {
  
  }

  logInUser(user: UserCredentials): void {
    this.authService.logIn(user.username, user.password).subscribe({
      next: (data) => {
        this.authService.setLoggedInUser(data);
        this.router.navigateByUrl(`/user-profile/${data.id}`);
      },
      error: (error) => {
        this.errorMessage = 'Invalid username or password';
        console.log("priting the error",error);
      }
    }
    );
   }
  onSubmit(formData:UserCredentials):void{
    if(this.logInForm.invalid){
      console.log(this.logInForm.errors);
    }else{
      this.logInUser(formData);
  }

  }
}
