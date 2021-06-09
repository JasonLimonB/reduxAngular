import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  counter!: number;

  constructor( private store: Store<Appstate> ) { }

  ngOnInit(): void {
    this.store.select('count').subscribe(counter => this.counter = counter);
  }

  resetValue(){
    this.store.dispatch( reset() );
  }

}
