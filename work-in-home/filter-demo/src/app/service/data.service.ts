import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  valueInput = new BehaviorSubject<string>('');

  constructor() { }

  sendValue(value: string) {
    this.valueInput.next(value);
  }

  receiveValue(): Observable<string> {
    return this.valueInput.asObservable();
  }
}
