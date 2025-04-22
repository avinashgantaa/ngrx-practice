import { createReducer, on } from '@ngrx/store';
import { initialstate } from './counter.state';
import {
  changeTitle,
  customadd,
  decrement,
  increment,
  reset,
} from './counter.actions';
const _counterReducer = createReducer(
  initialstate,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state: any) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state: any) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customadd, (state: any, acton: any) => {
    return {
      ...state,
      counter: acton.value + state.counter,
    };
  }),
  on(changeTitle, (state: any) => {
    return {
      ...state,
      title: 'Ngrx concepts by angular 16',
    };
  })
);
export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
