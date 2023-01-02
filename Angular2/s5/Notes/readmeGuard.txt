Demo 1:


1.create three component(Home,Login,Order)
2.create guard ,
  ng g guard Auth
--> canActivate

3.app.routing.module.ts

  {path:"order",component:OrderComponent, canActivate:[AuthGuard]}

4.create a service:
    ng g service Auth

5. in Authservice.ts
	 login(){
     this.isLoggedIn=true;
     console.log("User is logged in");
   }
6.login.ts
 	call service login method

7. Authguard.ts
	
check weather user is logged in or not

    checkLogin(url:any){
    console.log(url);
    if(this.authservice.isLoggedIn==true){
      return true;
    }else{
      //if user is not loggedin take user login page
      return this.router.navigateByUrl("/login");
    }
  }


in canActivate() call checkLogin()



Demo2:
1. generate three componenet cancle,update,orderlist
2.ng g guard child
3.update login component,service login method

4.{path:"order",component:OrderComponent, canActivate:[AuthGuard],
    canActivateChild:[ChildGuard],
    children:[
      {
        path:"details",component:OrderListComponent
      },
      {
        path:"cancle",component:CancleComponent
      },
      {
        path:"update",component:UpdateComponent

      }
    ]
5.update childGuard:

canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(state.url=='/order/update')
        return this.checkIsUserAdmin(state.url);
    return true;
  }

  checkIsUserAdmin(url:string){
    if(this.authservice.isUserAdmin)
      return this.authservice.isUserAdmin;
    else{
      return this.router.navigateByUrl("/login");
    }

  }

  

  

