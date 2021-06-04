import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() counter!: number;
  @Output() changeValueEmiter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  times(){
    this.counter*=2;
    this.changeValueEmiter.emit(this.counter);
  }
  dividedby(){
    this.counter/=2;
    this.changeValueEmiter.emit(this.counter);
  }

  reset( event:number ){
    this.counter = event;
    this.changeValueEmiter.emit(this.counter);    
  }

}
