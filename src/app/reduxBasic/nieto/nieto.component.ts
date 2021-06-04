import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input() counter!: number;
  @Output() reset = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  resetValue(){
    this.counter = 0;
    this.reset.emit(0);
  }

}
