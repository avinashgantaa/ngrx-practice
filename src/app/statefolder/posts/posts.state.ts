import { createFeatureSelector, createSelector } from '@ngrx/store';
import { posts } from '../model';
export interface postlist {
  posts: posts[];
  heading: string;
}

export const postinitialstate: postlist = {
  posts: [
    { id: 1, title: 'title 1', descritpion: 'description 1' },
    { id: 2, title: 'title 2', descritpion: 'description 2' },
    { id: 3, title: 'title 3', descritpion: 'description 3' },
    { id: 4, title: 'title 4', descritpion: 'description 4' },
  ],
  heading: 'Posts list ',
};

const getpostslist = createFeatureSelector<postlist>('posts');
export const postselector = createSelector(getpostslist, (state) => {
  return state.posts;
});
export const headingselector = createSelector(getpostslist, (state) => {
  return state.heading;
});
