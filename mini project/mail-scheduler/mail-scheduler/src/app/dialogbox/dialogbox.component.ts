import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ScheduleorsentComponent } from '../scheduleorsent/scheduleorsent.component';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  animal: any;
  name: any;
  formData:any={};

constructor(public dialog: MatDialog,private signinService:SigninService, private httpClient:HttpClient) { }

 scors:any=ScheduleorsentComponent;
  ngOnInit(): void {
     }

  emailConfigure()
  {
    console.log("hello");
    
      this.signinService.addaccount(this.formData).subscribe(()=>{})
      window.location.reload();
  }
}
