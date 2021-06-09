import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  counter!: number;

  constructor( private store: Store<Appstate> ) { }

  ngOnInit(): void {
    this.store.select('count').subscribe( counter => {
      this.counter = counter;
    } );
  }

  times(){
    this.store.dispatch( actions.times({num: 2}) );
  }
  dividedby(){
    this.store.dispatch( actions.dividedby({num: 2}) );
  }

}
