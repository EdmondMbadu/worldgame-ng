import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserCredentials } from 'src/app/types/auth';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  registerForm:any
errorMessage: string ="";
constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router){
  this.registerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    username:['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required],

  })

}

onSubmit(formData:UserCredentials):void{
  if(this.registerForm.invalid){
    console.log(this.registerForm.errors);
  }else{
    // this.logInUser(formData);
}

}

}
