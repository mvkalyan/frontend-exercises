import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private httpClient:HttpClient) { }

  isLoggedIn: boolean = false;
  isUserAdmin: boolean = false;

  redirectUrl: string = "";
  loginUrl='http://localhost:3000/authenticate';


    sendData(data:any)
    {
     const dataObservable=this.httpClient.post<any>('http://localhost:3000/authenticate',data);  
      return dataObservable;
    }
    registerData(data:any)
    {  
     const regObservable=this.httpClient.post<any>('http://localhost:3000/register',data); 
      return regObservable;
    }
    schedule(data:any)
    {
      const scheduleObservable=this.httpClient.post<any>("http://localhost:3004/emails",data);
      return scheduleObservable;
    }
    emailConf(data:any)
    {
      const scheduleObservable=this.httpClient.post<any>("http://localhost:3004/mail-configurations",data);
      return scheduleObservable;
    }
    addaccount(data:any){
      const accountObservable=this.httpClient.post<any>('http://localhost:3002/accounts',data);
      return accountObservable;
    }
}
