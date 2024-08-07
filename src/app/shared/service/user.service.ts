import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('John Doe');

  constructor() { }
}
