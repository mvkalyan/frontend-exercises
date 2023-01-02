import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginComponent } from './login/login.component';
import { MailSchedularBarComponent } from './mail-schedular-bar/mail-schedular-bar.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleorsentComponent } from './scheduleorsent/scheduleorsent.component';
import { SendMailBarComponent } from './send-mail-bar/send-mail-bar.component';

const routes: Routes = [
  {path:"",component:MailSchedularBarComponent,
    children:[
      {path:"",component:LoginComponent},
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent}
    ]
  },
  {path:"mailbar",component:SendMailBarComponent,
    children:[
      {path:"dialog",component:DialogboxComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
