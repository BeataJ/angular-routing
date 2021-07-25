import { 
    ActivatedRouteSnapshot, 
    CanActivate, 
    RouterStateSnapshot 
} from "@angular/router"
import { Observable } from "rxjs";

export class AuthGoard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        
    }
}