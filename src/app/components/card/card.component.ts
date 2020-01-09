import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() suit: string;
  @Input() value: string;
  @Input() points: number;


  constructor() { }

  ngOnInit() {
  }
}
