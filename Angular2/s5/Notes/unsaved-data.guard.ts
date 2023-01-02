import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UpdateComponent } from './update/update.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class UnsavedDataGuard implements CanDeactivate<UpdateComponent> {
//   canDeactivate(
//     component: UpdateComponent,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if(component.status){
//         return true;
//       }
//     else{
//         if(window.confirm("you have some unsaved data....Do you want to close it "))
//             return true;
//          else
//             return false;
//       }
//   }
// }



//if you want to apply guard to all component
//create interface

export interface CanComponentDeActivate{
  //create a method 
  canDeactivate2:()=>Observable<boolean>|Promise<boolean>|boolean

}
@Injectable({
  providedIn: 'root'
})
//create class
export class UnsavedDataGuard implements CanDeactivate<CanComponentDeActivate>{
  canDeactivate(component: CanComponentDeActivate, 
  currentRoute: ActivatedRouteSnapshot, 
  currentState: RouterStateSnapshot, 
  nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    let url=currentState.url;
    console.log("currentState url"+url);
    console.log(component.canDeactivate2())
    return component.canDeactivate2?component.canDeactivate2():true;
  }
 
  
}


