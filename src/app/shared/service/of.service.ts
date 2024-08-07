import { Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  constructor() { }

  // pipeable observable of$ to return even numbers
  of$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe(
      filter((num: number) => num % 2 === 0)
    )

  // pipeable observable skills$

  skills$ = of('html', 'css', 'javascript', 'angular', 'typescript')
    .pipe(
      tap((skill: string) => {
        console.log(`Before map ${skill}`);
      }),
      map((skill: string) => `I love ${skill}`),
      tap((skill: string) => {
        console.log(`After map ${skill}`);
      }),
    )


  customInterval = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count++);
      if (count > 12) {
        observer.error('Error');
      }
    }, 500);
  })
}
