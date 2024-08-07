import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  interval$ = interval(1000);
  intervalSubscription!: Subscription;

  constructor(
  ) { }


  ngOnInit(): void {
    this.handleInterval();

  }

  handleInterval() {
    this.intervalSubscription = this.interval$.subscribe(res => {
      console.log(res);
    })
  }





  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
