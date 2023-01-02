import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { SigninService } from 'src/app/signin.service';

@Component({
  selector: 'app-scheduleorsent',
  templateUrl: './scheduleorsent.component.html',
  styleUrls: ['./scheduleorsent.component.css']
})
export class ScheduleorsentComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  constructor(public dialog: MatDialog,private httpClient:HttpClient,private signinService:SigninService) { }
  saveUrl="http://localhost:3004/emails";
  data:any=[];

  ngOnInit(): void {
     const obj=this.httpClient.get<any>(this.saveUrl).subscribe((data:any)=>{
       this.data=data;
      console.log(this.data); 
     })    
  }
  formsData:any={};

 openDialog(): void {
    const dialogRef = this.dialog.open(DialogboxComponent,{
    });
  }
  scheduler()
  {
      this.signinService.schedule(this.formsData).subscribe(()=>{})
      window.location.reload();

  }
  discarder(){
    window.location.reload();
  }
  emailConfigure()
  {
    console.log("hello");

      this.signinService.emailConf(this.formsData).subscribe(()=>{})
      window.location.reload();
  }
}
