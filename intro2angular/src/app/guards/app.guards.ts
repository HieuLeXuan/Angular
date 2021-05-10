import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FbService } from '../service/fb.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppGuards implements CanActivate {

    constructor(
        public fb: FbService, 
        public router: Router,
        ) {

    }

    canActivate (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
            return this.fb.isAuth()
                .pipe(map(
                    auth => {
                        if(auth) {
                            return true;
                        } else {
                            this.router.navigate(['/login']);
                            return false;
                        }
                    }
                ));
        }
}