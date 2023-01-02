import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private signinService:SigninService,private router:Router) { }

  ngOnInit(): void {
  }
  formData:any={};

  login(){
    this.signinService.sendData(this.formData).subscribe(()=>{
      alert("LoggedIn");
      this.signinService.isLoggedIn=true;
      this.router.navigate(["/mailbar"]);
    },
    err=>{
      alert("invalid credentials");
    }
    );
  }

}
