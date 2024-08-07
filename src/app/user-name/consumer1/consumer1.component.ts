import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.scss']
})
export class Consumer1Component implements OnInit {

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
