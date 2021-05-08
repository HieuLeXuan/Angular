import { Injectable } from '@angular/core';
import {AngularFireLiteAuth, AngularFireLiteFirestore} from 'angularfire-lite';
import {first, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(
    public auth: AngularFireLiteAuth, 
    public fs: AngularFireLiteFirestore) {
  }

  isAuth() {
    return this.auth.isAuthenticated();
  }

  signin(email: string, pass: string) {
    return this.auth.signin(email, pass);
  }

  signup(email: string, pass: string) {
    return this.auth.signup(email, pass);
  }


  getCities() {
    return this.auth.uid()
    .pipe(switchMap((uid: any) => {
      return this.fs.read(`${uid}`);
    }));
  }
}
