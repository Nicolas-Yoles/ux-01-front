import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {
  @Input() text:string;
  constructor() { }

  ngOnInit(): void {
  }

}
