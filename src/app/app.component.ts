import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './reduxBasic/counter.actions';

interface Appstate{
  count: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cont!: number;

  hello = 'Hello world';

  constructor( private store: Store<Appstate > ){
    this.store.subscribe( state =>{
      this.cont = state.count;
    });
  }

  increment(){
    this.store.dispatch( actions.increment() );
  }
  decrement(){
    this.store.dispatch( actions.decrement() );
  }

}
