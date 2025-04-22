import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appstate } from 'src/app/statefolder/appstate';
import { posts } from 'src/app/statefolder/model';
import { headingselector, postselector } from 'src/app/statefolder/posts/posts.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  heading!:Observable<string>
  postsdata!:Observable<posts[]>
  constructor(private store:Store<appstate>){}
  ngOnInit(): void {
    this.postsdata=this.store.select(postselector)
    this.heading=this.store.select(headingselector)
  }

}
