import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appstate } from 'src/app/statefolder/appstate';
import { titlename } from 'src/app/statefolder/counter/counter.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title!:Observable<string>
  constructor(private store:Store<appstate>){}
  ngOnInit(): void {
    this.title=this.store.select(titlename)

    
  }

}
