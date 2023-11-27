import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  Subject,
  debounceTime,
  merge,
  reduce,
  scan,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrl: './rx-js.component.css',
})
export class RxJsComponent {
  numberForm = new FormGroup({
    nb1: new FormControl(0),
    nb2: new FormControl(0),
  });

  merge$: Observable<number | null>;
  scan$: Observable<number>;
  reduce$: Observable<number>;

  endStream1$: Subject<null> = new Subject();
  endStream2$: Subject<null> = new Subject();

  constructor() {
    const nb1$ = this.numberForm
      .get('nb1')!
      .valueChanges.pipe(debounceTime(300), takeUntil(this.endStream1$));

    const nb2$ = this.numberForm
      .get('nb2')!
      .valueChanges.pipe(debounceTime(300), takeUntil(this.endStream2$));

    this.merge$ = merge(nb1$, nb2$);

    this.scan$ = this.merge$.pipe(scan((acc, val) => acc + (val ?? 0), 0));

    this.reduce$ = this.merge$.pipe(reduce((acc, val) => acc + (val ?? 0), 0));
  }

  terminate(stream: Subject<null>) {
    stream.next(null);
    stream.complete();
  }

}
