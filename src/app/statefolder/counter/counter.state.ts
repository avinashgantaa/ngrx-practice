import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterinterface } from '../model';
export const initialstate: counterinterface = {
  counter: 0,
  title: 'Ngrx tutorial',
};

const getcounterselector = createFeatureSelector<counterinterface>('counter');
export const countername = createSelector(getcounterselector, (state) => {
  return state.counter;
});
export const titlename = createSelector(getcounterselector, (state) => {
  return state.title;
});
