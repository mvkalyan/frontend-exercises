import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private signService:SigninService) { }

  ngOnInit(): void {
  }
  data:any={};

  login(){
    this.router.navigate(['/','login']);
  }

  register(){
    if(this.data.password!=this.data.confpassword){
      alert("Your password and confirm password should match");
    }
    else{
      this.signService.registerData(this.data).subscribe(()=>{
        alert("Registered Successfully");
        this.signService.isLoggedIn=true;
        this.router.navigate(["/login"]);
      });
    }
  }

}
