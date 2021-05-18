import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataOrtherComponentService {
  private behaviorSubject = new BehaviorSubject<string>('');

  constructor() { }

  sendData(data: string) {
    this.behaviorSubject.next(data);
  }

  reciveData(): Observable<string> {
    return this.behaviorSubject.asObservable();
  }
}
