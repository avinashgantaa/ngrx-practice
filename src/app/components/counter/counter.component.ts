import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appstate } from 'src/app/statefolder/appstate';
import {
  changeTitle,
  customadd,
  decrement,
  increment,
  reset,
} from 'src/app/statefolder/counter/counter.actions';
import { countername } from 'src/app/statefolder/counter/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  countervalue$!: Observable<number>;
  addinput!: string;
  constructor(private store: Store<appstate>) {}
  ngOnInit(): void {
    this.countervalue$ = this.store.select(countername);
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  add() {
    this.store.dispatch(customadd({ value: +this.addinput }));
  }
  changetitle() {
    this.store.dispatch(changeTitle());
  }
}
