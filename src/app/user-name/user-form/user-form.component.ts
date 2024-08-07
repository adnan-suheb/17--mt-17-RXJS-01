import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @ViewChild('userForm') userForm!: ElementRef


  constructor(
    private _userSubject: UserService
  ) { }

  ngOnInit(): void {
  }


  getUsername() {
    let val = (this.userForm.nativeElement as HTMLInputElement).value as string;
    this._userSubject.userSubject$.next(val);
    this.userForm.nativeElement.value = '';


  }
}
