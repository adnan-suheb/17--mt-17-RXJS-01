import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-consumer3',
  templateUrl: './consumer3.component.html',
  styleUrls: ['./consumer3.component.scss']
})
export class Consumer3Component implements OnInit {

  userName!: string;

  constructor(
    private _user: UserService
  ) { }

  ngOnInit(): void {
    this.handleUserSubject();

  }

  handleUserSubject() {
    this._user.userSubject$.subscribe(res => {
      this.userName = res;

    })
  }

}
