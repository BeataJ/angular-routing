import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

interface Server { id: number, name: string, status: string }

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server>{
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | {

  }

  // constructor() { }
}
