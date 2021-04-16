import {Component, OnInit} from '@angular/core';
import {combineLatest, fromEvent, Observable} from 'rxjs';
import {debounceTime, map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-bmi-component',
  templateUrl: 'bmi.component.html',
  styles: []
})
export class BmiComponent implements OnInit {
  public BMI$: Observable<number>;
  public result$: Observable<string>;

  constructor() {
  }

  ngOnInit(): void {
    const gender$ = fromEvent(document.querySelector('#gender'), 'input').pipe(
      pluck('target', 'value'),
    );
    const height$ = fromEvent(document.querySelector('#height'), 'input')
      .pipe(
        pluck('target', 'value'),
        // @ts-ignore
        map(v => v / 100)
      );
    const weight$ = fromEvent(document.querySelector('#weight'), 'input')
      .pipe(
        pluck('target', 'value')
      );

    const range = n => {
      if (n < 16.5) {
        return 'grave magrezza';
      }
      if (n < 18.5 && n >= 16.5) {
        return 'sottopeso';
      }
      if (n < 25 && n >= 18.5) {
        return 'nella norma';
      }
      if (n < 30 && n >= 25) {
        return 'sovrappeso';
      }
      if (n < 35 && n >= 30) {
        return 'OBESITÀ CLASSE I (lieve)';
      }
      if (n < 40 && n >= 35) {
        return 'OBESITÀ CLASSE II (media)';
      }
      return 'OBESITÀCLASSE III (grave)';
    };


    this.BMI$ = combineLatest(
      height$,
      weight$
    ).pipe(
      debounceTime(1000),
      // @ts-ignore
      map(([h, w]) => w / (h + h)),
    );

    this.result$ = this.BMI$.pipe(
      map(range)
    );

  }

}
