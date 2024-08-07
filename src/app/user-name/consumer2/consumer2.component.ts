import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component implements OnInit {
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
